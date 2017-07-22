$(document).ready(function(){
  //TODO: Server request
  var deputiesList = app.generateDeputies();

  var div = templates.camara(deputiesList);
  $(div).appendTo($('.my-container'));

  $('.deputy').click(function(){
    $('#info-window').modal('show');
  })
});
