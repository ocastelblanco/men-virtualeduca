/*
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
*/
var pos = 1;
$(function() {
	setTimeout(function() {
		// Posiciones iniciales de los hexágonos
		$('.queEs h3').position({
			of: $('.direccion h3'),
			my: 'left center',
			at: 'right+15 center+0'
		});
		$('.organizacion h3').position({
			of: $('.direccion h3'),
			my: 'center top',
			at: 'right bottom-40'
		});
		$('.tics h3').position({
			of: $('.direccion h3'),
			my: 'center top',
			at: 'left bottom-40'
		});
	}, 500);
	// Métodos interactivos
	$('.queEs h3').click(function(e) {
		if (pos == 1) {
			despliega();
		}
		if (pos == 2) {
			$('.organizacion').removeClass('select');
			de2a1(despliega);
			pos = 1;
		}
		if (pos == 3) {
			$('.tics').removeClass('select');
			de3a1(despliega);
			pos = 1;
		}
    });
	$('.organizacion h3').click(function(e) {
		if (pos == 1) {
			$('.queEs').removeClass('select');
			de1a2(despliega);
			pos = 2;
		}
		if (pos == 3) {
			$('.tics').removeClass('select');
			de3a2(despliega);
			pos = 2;
		}
    });
	$('.tics h3').click(function(e) {
		if (pos == 1) {
			$('.queEs').removeClass('select');
			de1a3(despliega);
			pos = 3;
		}
		if (pos == 2) {
			$('.organizacion').removeClass('select');
			de2a3(despliega);
			pos = 3;
		}
    });
});
// ----------- Funciones generales

function de1a2(fun) {
	$('.queEs h3').animate({
		top: '-=170px',
		left: '-=100px'
	});
	$('.organizacion h3').animate({
		top: '-=170px',
		left: '+=90px'
	});
	$('.tics h3').animate({
		top: '-=0px',
		left: '+=202px'
	}, fun);
}
function de2a1(fun) {
	$('.queEs h3').animate({
		top: '+=170px',
		left: '+=100px'
	});
	$('.organizacion h3').animate({
		top: '+=170px',
		left: '-=90px'
	});
	$('.tics h3').animate({
		top: '+=0px',
		left: '-=202px'
	}, fun);
}
function de2a3(fun) {
	$('.queEs h3').animate({
		top: '-=0px',
		left: '-=202px'
	});
	$('.organizacion h3').animate({
		top: '-=170px',
		left: '-=100px'
	});
	$('.tics h3').animate({
		top: '-=170px',
		left: '+=90px'
	}, fun);
}
function de3a2(fun) {
	$('.queEs h3').animate({
		top: '+=0px',
		left: '+=202px'
	});
	$('.organizacion h3').animate({
		top: '+=170px',
		left: '+=100px'
	});
	$('.tics h3').animate({
		top: '+=170px',
		left: '-=90px'
	}, fun);
}
function de3a1(fun) {
	$('.queEs h3').animate({
		top: '+=0px',
		left: '+=202px'
	});
	$('.organizacion h3').animate({
		top: '+=170px',
		left: '+=100px'
	});
	$('.tics h3').animate({
		top: '+=170px',
		left: '-=90px'
	}, sig);
	function sig() {
		$('.queEs h3').animate({
			top: '+=170px',
			left: '+=100px'
		});
		$('.organizacion h3').animate({
			top: '+=170px',
			left: '-=90px'
		});
		$('.tics h3').animate({
			top: '+=0px',
			left: '-=202px'
		}, fun);
	}
}
function de1a3(fun) {
	$('.queEs h3').animate({
		top: '-=170px',
		left: '-=100px'
	});
	$('.organizacion h3').animate({
		top: '-=170px',
		left: '+=90px'
	});
	$('.tics h3').animate({
		top: '-=0px',
		left: '+=202px'
	}, sig);
	function sig() {
		$('.queEs h3').animate({
			top: '-=0px',
			left: '-=202px'
		});
		$('.organizacion h3').animate({
			top: '-=170px',
			left: '-=100px'
		});
		$('.tics h3').animate({
			top: '-=170px',
			left: '+=90px'
		}, fun);
	}
}
function despliega() {
	if (pos == 1 && $('.queEs').hasClass('select')) {
		$('.queEs').removeClass('select', 500);
	} else if (pos == 1 && !$('.queEs').hasClass('select')) {
		$('.queEs').addClass('select', 500, posNav1);
		function posNav1() {
			$('.queEs nav').position({
				of: $('.direccion h3'),
				my: 'left top',
				at: 'right+165 top+76'
			});
		}
	}
	if (pos == 2) {
		$('.organizacion').addClass('select', 500, posNav2);
		function posNav2() {
			$('.organizacion nav').position({
				of: $('.direccion h3'),
				my: 'left top',
				at: 'right+165 top+76'
			});
		}
	}
	if (pos == 3) {
		$('.tics').addClass('select', 500, posNav3);
		function posNav3() {
			$('.tics nav').position({
				of: $('.direccion h3'),
				my: 'left top',
				at: 'right+165 top-76'
			});
		}
	}
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