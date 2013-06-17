$(function() {
	var destino = $.getUrlVar('target');
	var titulo = destino.substr(0, 1);
	var subtitulo1 = $('.page .navigation section.tics li:first-child');
	var subtitulo2 = $('.page .navigation section.tics li:nth-child(6)');
	$('#'+titulo).addClass('activo');
	$('#'+destino).addClass('btnSelect');
	insertarContenido(destino);
	subtitulo1.click(function(e) {
        return false;
		stop();
    });
	subtitulo2.click(function(e) {
        return false;
		stop();
    });
	$('section li>a').click(function(e) {
		e.preventDefault();
		$('.btnSelect').removeClass('btnSelect', 500);
		$(this).parent().addClass('btnSelect', 500, cargaContenido($(this).parent().attr('id')));
		e.stopPropagation();
    });
	$('.navigation section').click(function(e) {
        e.preventDefault();
		$('.navigation section.activo').removeClass('activo', 500);
		$(this).addClass('activo', 500);
    });
});
function cargaContenido(id) {
	insertarContenido(id);
}
function insertarContenido(destino) {
	var nombre = destino+'.html .content';
	$('.content').parent().load(nombre, function(){
		$('.content').hide();
		$('.content').show('drop', {direction: 'up'}, 750);
		window.mySwipe = new Swipe(document.getElementById('slider'), {auto: 3000});
	});
}
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});