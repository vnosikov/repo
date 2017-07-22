$(document).ready(function(){
  //TODO: Server request
  //
  // $.getJSON('http://159.203.126.42:9000/diputados/all', function() {
  //   alert('Hey bro!');
  // });

  // window.jsonCallback = function(json){
  //   console.log(json);
  // }

  $.ajax({
    url: "http://159.203.126.42:9000/diputados/all",
    dataType: "jsonp",
    jsonpCallback: 'callback',
    success: function(response) {
      app.deputiesList = response;
      startWorking()
    }
  });

  function startWorking() {
    app.deputiesList.sort(function(a,b){
      var dict = {
        UDI: 13,
        RN: 12,
        EVOP: 11,
        AMPL: 10,
        IND: 8,
        DC: 7,
        PL:6,
        PPD: 5,
        PRSD: 4,
        PS: 3,
        REVD: 2,
        IC: 1,
        PC: 0,
      }

      var aR = dict[a.partido];
      var bR = dict[b.partido];

      return aR - bR;
    });

    var div = templates.camara_arch({
      deputies: app.deputiesList,
      dict: app.coordDict
    });
    $(div).appendTo($('.my-container'));

    $('.deputy').click(function(){
      var deputy = app.deputiesList[$(this).data('index')]
      $('#info-window').modal('show');
      $('#info-window .name').text(deputy.nombre);
      $('#info-window .party').text(deputy.partido);

      var imgPath = 'https://www.camara.cl' + deputy.img_url;
      $('#info-window .avatar img').attr('src', imgPath);
    });
  }
});
