var TextRotator = (function () {
	
	var _default = {
		idPrevious: 'prev',
		idNext: 'next'
	};
	
	var item = {};
	
	var configureOptions = function (options) {
		$.extend(_default, options);
	};
	
	var configureRotator = function() {
		_default.slides.hide();
		item = $(_default.slides[0]).show();
	};
	
	var initializeEvents = function () {
		$('#biography-buttons a#'+_default.idPrevious).on('click', onClickPrevious);
		$('#biography-buttons a#'+_default.idNext).on('click', onClickNext);
	}
	
	var onClickPrevious = function () {	
		if (!!item.hide().prev().length) {
			item = item.hide().prev().show();
		} else {
			item = $(_default.slides[_default.slides.length-1]).show();
		}
		
		return false;
	};

	var onClickNext = function () {
		if(!!item.hide().next().length) {
			item = item.hide().next().show();
		} else {
			item = $(_default.slides[0]).show();
		}
		
		return false;
	};
	
	var init = function (options) {	
		configureOptions(options);
		configureRotator();
		initializeEvents();
	};
	
	return {
		init: init
	}
}());

var options = {
	idPrevious: 'biography-prev',
	idNext: 'biography-next',
	slides: $('.biography-slide'),
	container: $('#biography-slides ul')
};


$(document).on('ready', TextRotator.init(options));