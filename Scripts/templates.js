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
window.templates['camara_arch'] = function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Array, dict, undefined) {
var deputies = locals.deputies
var coordDict = locals.dict 
buf.push("<div class=\"chamber-arch\">");
var counter=0
// iterate Array(120)
;(function(){
  var $$obj = Array(120);
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var _ = $$obj[i];

var d = deputies[i];
buf.push("<div" + (jade.attr("data-index", "" + (i) + "", true, false)) + (jade.attr("style", "left: " + (dict[i].left) + "; top: " + (dict[i].top) + "", true, false)) + (jade.attr("title", "" + (d.nombre || '') + "", true, false)) + (jade.cls(['deputy','deputy-arch',"" + (d.partido) + ""], [null,null,true])) + "></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var _ = $$obj[i];

var d = deputies[i];
buf.push("<div" + (jade.attr("data-index", "" + (i) + "", true, false)) + (jade.attr("style", "left: " + (dict[i].left) + "; top: " + (dict[i].top) + "", true, false)) + (jade.attr("title", "" + (d.nombre || '') + "", true, false)) + (jade.cls(['deputy','deputy-arch',"" + (d.partido) + ""], [null,null,true])) + "></div>");
    }

  }
}).call(this);

buf.push("</div><div id=\"info-window\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" class=\"close\">&times</button><p>PERFIL DEL DIPUTADO</p></div><div class=\"modal-body\"><div class=\"avatar\"><img/></div><div class=\"header-info\"><p class=\"header\">Nombre: </p><p class=\"name\"></p><p class=\"header\">Partido: </p><p class=\"party\"></p></div><table class=\"info-table\"><tr><td><p>PERÍODOS</p><p class=\"value periods\">2014-2018</p></td><td><p>REGIÓN</p><p class=\"value region\"></p></td><td><p>DISTRITO</p><p class=\"value district\"></p></td></tr></table><p class=\"vote-info\">Votos:</p><div class=\"votation\"><!--table_votes.jade will be added here--></div></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cerrar</button></div></div></div></div>");}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"dict" in locals_for_with?locals_for_with.dict:typeof dict!=="undefined"?dict:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
window.templates['table_votes'] = function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
var votes = locals.votes;
var dict= locals.dict;
buf.push("<table class=\"vote-table\"><tr><td></td><td>Voto de Persona</td><td>Voto de Partido</td></tr>");
// iterate votes
;(function(){
  var $$obj = votes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var v = $$obj[$index];

buf.push("<tr><td class=\"name\">" + (jade.escape((jade_interp = v.votacion_name) == null ? '' : jade_interp)) + "</td><td" + (jade.cls(['vote',"" + (dict[v.vote]) + ""], [null,true])) + ">" + (jade.escape((jade_interp = v.vote) == null ? '' : jade_interp)) + "</td><td" + (jade.cls(['vote',"" + (dict[v.vote_partido]) + ""], [null,true])) + ">" + (jade.escape((jade_interp = v.vote_partido) == null ? '' : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var v = $$obj[$index];

buf.push("<tr><td class=\"name\">" + (jade.escape((jade_interp = v.votacion_name) == null ? '' : jade_interp)) + "</td><td" + (jade.cls(['vote',"" + (dict[v.vote]) + ""], [null,true])) + ">" + (jade.escape((jade_interp = v.vote) == null ? '' : jade_interp)) + "</td><td" + (jade.cls(['vote',"" + (dict[v.vote_partido]) + ""], [null,true])) + ">" + (jade.escape((jade_interp = v.vote_partido) == null ? '' : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("<tr><td class=\"name\">Otro Ley</td><td>?????</td><td>?????</td></tr><tr><td class=\"name\">Ley Importante<td>??????</td><td>??????</td></td></tr></table>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
window.templates['test'] = function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var x = locals
buf.push("<div" + (jade.cls(['some-div',"numero" + (x) + ""], [null,true])) + "></div>");;return buf.join("");
};
