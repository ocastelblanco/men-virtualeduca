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
	    // Initialize the activity check
    $.activity.init({
        // Set interval check to every 5 seconds
        interval: 1000*5,
        intervalFn: function(info){
            console.log('Interval Check - Last Active:', info.lastActive, ', Difference in milliseconds to current time:', info.diff);
        },
        // Set inactive check to every 15 seconds
        inactive: 1000*5*12,
        inactiveFn: function(info){
            console.warn('Inactive Triggered - Last Active:', info.lastActive, ', Difference in milliseconds to current time:', info.diff);
			window.location.href = "index.html";
        }
    });

    // Either reactivate, or update the current timestamp when user clicks on the page
    $(document).click(function(){
        if ( $.activity.isActive() )
            $.activity.update();
        else
            $.activity.reActivate();
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