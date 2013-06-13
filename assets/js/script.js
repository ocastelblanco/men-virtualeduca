$(document).ready(function(){
	$('.navigation h3').bind('click', function(){
		$('.navigation nav').removeAttr("style");
		var click = $(this);
		$('.activo nav').slideUp();
		click.parent().children('nav').slideToggle();
		$('.activo').removeClass('activo');
		click.parent().addClass('activo');
	});
});