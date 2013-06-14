$(function() {
	$('section li>a').click(function(e) {
		e.preventDefault();
		$('.btnSelect').removeClass('btnSelect', 500);
		$(this).parent().addClass('btnSelect', 500, cargaContenido($(this).parent().attr('id')));
    });
});
function cargaContenido(id) {
	console.log('El vínculo elegido es '+id);
}