$(document).ready(function(){

  $.ajax({
    url: "http://159.203.126.42:9000/diputados/all",
    dataType: "jsonp",
    jsonpCallback: 'callback',
    success: function(response) {
      app.deputiesList = response;
      startWorking()
    }
  });
  //
  // app.deputiesList = app.generateDeputies();
  // startWorking();

  function startWorking() {
    app.deputiesList.sort(function(a,b){
      var dict = {
        UDI: 13,
        RN: 12,
        EVOP: 11,
        AMPL: 10,
        IND: 8,
        PL:7,
        REVD: 6,
        DC: 5,
        PPD: 4,
        PRSD: 3,
        PS: 2,
        IC: 1,
        PC: 0,
      }

      var aR = dict[a.partido];
      var bR = dict[b.partido];

      return aR - bR;
    });

    var div = templates['camara_arch']({
      deputies: app.deputiesList,
      dict: app.coordDict
    });
    $(div).appendTo($('.my-container'));

    $('.deputy').click(function(){
      var deputy = app.deputiesList[$(this).data('index')];

      // showModal(deputy, [{
      //   votacion_name: 'Ley de Aborto',
      //   vote: Math.random() < 0.5 ? 'A favor' : 'En Contra'
      // }]);

      $.ajax({
        url: 'http://159.203.126.42:9000/votes/name/' + deputy.nombre,
        dataType: "jsonp",
        jsonpCallback: 'callback',
        success: function(response) {
          response.forEach(function(v){
            v.votacion_name = 'Ley de Aborto';
          });
          showModal(deputy, response);
        }
      });
    });

    updateData('http://159.203.126.42:9000/votes/all');
  }

  function showModal(deputy, votes) {
    $('#info-window').modal('show');
    $('#info-window .name').text(deputy.nombre);
    $('#info-window .party').text(deputy.partido);

    var imgPath = 'https://www.camara.cl' + deputy.img_url;
    $('#info-window .avatar img').attr('src', imgPath);

    // $('#info-window .profession').text(deputy.profesion);
    $('#info-window .region').text(deputy.region);
    $('#info-window .district').text(deputy.distrito);


    var table = window.templates['table_votes']({
      votes: votes,
      dict: {
        'A favor': 'favor',
        'En contra': 'contra',
        'Abstencion': 'abstencion',
        'Pareo': 'pareo',
        'Ausente': 'ausente',
        'No voto': 'novoto'
      }
    });
    $('#info-window .votation').empty();
    $(table).appendTo('#info-window .votation');
  }

  function updateData(url) {
    var a_favor = [], en_contra = [], abstencion = [], pareados = [], ausentes = [];
    try
    {
        console.info("url", url);
        $.ajax({
            url: url,
            type: 'GET',
            data: { },
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function(request){
                $.each(request, function(k, v) {
                    if(v.vote == "A favor") {
                        a_favor.push(v);
                    }
                    if(v.vote == "En contra") {
                        en_contra.push(v);
                    }
                    if(v.vote == "Abstencion") {
                        abstencion.push(v);
                    }
                    if(v.vote == "Pareo") {
                        pareados.push(v);
                    }
                    if(v.vote == "Ausente") {
                        ausentes.push(v);
                    }
                });

        var data = {
            labels: [
                'A favor', 'En contra', 'Abstención',
                'Pareados', 'Ausentes'
            ],
            series: [
                {
                label: 'Ley de aborto',
                values: [a_favor.length, en_contra.length, abstencion.length, pareados.length, ausentes.length]
                }]
            };

        var chartWidth       = 300,
            barHeight        = 20,
            groupHeight      = barHeight * data.series.length,
            gapBetweenGroups = 10,
            spaceForLabels   = 150,
            spaceForLegend   = 150;

        // Zip the series data together (first values, second values, etc.)
        var zippedData = [];
        for (var i=0; i<data.labels.length; i++) {
            for (var j=0; j<data.series.length; j++) {
                zippedData.push(data.series[j].values[i]);
            }
        }

        // Color scale
        var color = d3.scale.category20();
        var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

        var x = d3.scale.linear()
            .domain([0, d3.max(zippedData)])
            .range([0, chartWidth]);

        var y = d3.scale.linear()
            .range([chartHeight + gapBetweenGroups, 0]);

        var yAxis = d3.svg.axis()
            .scale(y)
            .tickFormat('')
            .tickSize(0)
            .orient("left");

        // Specify the chart area and dimensions
        var chart = d3.select(".chart")
            .attr("width", spaceForLabels + chartWidth + spaceForLegend)
            .attr("height", chartHeight);

        // Create bars
        var bar = chart.selectAll("g")
            .data(zippedData)
            .enter().append("g")
            .attr("transform", function(d, i) {
            return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
        });

        // Create rectangles of the correct width
        bar.append("rect")
            .attr("fill", function(d,i) { return color(i % 5); })
            .attr("class", "bar")
            .attr("width", x)
            .attr("height", barHeight - 1);

        // Add text label in bar
        bar.append("text")
            .attr("x", function(d) { return x(d) - 3; })
            .attr("y", barHeight / 2)
            .attr("fill", "red")
            .attr("dy", ".35em")
            .text(function(d) { return d; });

        // Draw labels
        bar.append("text")
            .attr("class", "label")
            .attr("x", function(d) { return - 10; })
            .attr("y", groupHeight / 2)
            .attr("dy", ".35em")
            .text(function(d,i) {
            if (i % data.series.length === 0)
                return data.labels[Math.floor(i/data.series.length)];
            else
                return ""});

        chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups/2 + ")")
            .call(yAxis);

        // Draw legend
        var legendRectSize = 18,
            legendSpacing  = 4;

        var legend = chart.selectAll('.legend')
            .data(data.series)
            .enter()
            .append('g')
            .attr('transform', function (d, i) {
                var height = legendRectSize + legendSpacing;
                var offset = -gapBetweenGroups/2;
                var horz = spaceForLabels + chartWidth + 40 - legendRectSize;
                var vert = i * height - offset;
                return 'translate(' + horz + ',' + vert + ')';
            });

        legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .style('fill', function (d, i) { return color(i); })
            .style('stroke', function (d, i) { return color(i); });

        legend.append('text')
            .attr('class', 'legend')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .text(function (d) { return d.label; });
                }
            });

    }
    catch(err){ console.log(err); }
  }
});
