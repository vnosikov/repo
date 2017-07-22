$(document).ready(function(){
  //TODO: Server request
  var deputiesList = app.generateDeputies();

  var div = templates.camara_arch({
    deputies: deputiesList,
    dict: app.coordDict
  });
  $(div).appendTo($('.my-container'));

  $('.deputy').click(function(){
    $('#info-window').modal('show');
  })
});
