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
  }

  function showModal(deputy, votes) {
    $('#info-window').modal('show');
    $('#info-window .name').text(deputy.nombre);
    $('#info-window .party').text(deputy.partido);

    var imgPath = 'https://www.camara.cl' + deputy.img_url;
    $('#info-window .avatar img').attr('src', imgPath);

    var table = window.templates['table_votes'](votes);
    $('#info-window .modal-body').empty();
    $(table).appendTo('#info-window .modal-body');
  }
});
