window.templates = {};
window.templates['camara'] = function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Array, undefined) {
var deputies = locals
buf.push("<div class=\"chamber\">");
var counter=0
// iterate Array(20)
;(function(){
  var $$obj = Array(20);
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var _ = $$obj[i];

buf.push("<div" + (jade.cls(['deputies-set',"set-" + (i) + ""], [null,true])) + ">");
// iterate Array(6)
;(function(){
  var $$obj = Array(6);
  if ('number' == typeof $$obj.length) {

    for (var j = 0, $$l = $$obj.length; j < $$l; j++) {
      var _ = $$obj[j];

var d = deputies[i * 6 + j]
buf.push("<div" + (jade.cls(['deputy',"" + (d.party) + ""], [null,true])) + "></div>");
    }

  } else {
    var $$l = 0;
    for (var j in $$obj) {
      $$l++;      var _ = $$obj[j];

var d = deputies[i * 6 + j]
buf.push("<div" + (jade.cls(['deputy',"" + (d.party) + ""], [null,true])) + "></div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var _ = $$obj[i];

buf.push("<div" + (jade.cls(['deputies-set',"set-" + (i) + ""], [null,true])) + ">");
// iterate Array(6)
;(function(){
  var $$obj = Array(6);
  if ('number' == typeof $$obj.length) {

    for (var j = 0, $$l = $$obj.length; j < $$l; j++) {
      var _ = $$obj[j];

var d = deputies[i * 6 + j]
buf.push("<div" + (jade.cls(['deputy',"" + (d.party) + ""], [null,true])) + "></div>");
    }

  } else {
    var $$l = 0;
    for (var j in $$obj) {
      $$l++;      var _ = $$obj[j];

var d = deputies[i * 6 + j]
buf.push("<div" + (jade.cls(['deputy',"" + (d.party) + ""], [null,true])) + "></div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div><div id=\"info-window\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" class=\"close\">&times</button><div class=\"avatar\"></div><div class=\"header-info\"><p>Nombre: </p><p>Partido: </p></div></div><div class=\"modal-body\"><table><tr><td>Voto</td><td>A favor</td></tr></table></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cerrar</button></div></div></div></div>");}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
window.templates['test'] = function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var x = locals
buf.push("<div" + (jade.cls(['some-div',"numero" + (x) + ""], [null,true])) + "></div>");;return buf.join("");
};