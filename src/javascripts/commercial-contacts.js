var CommercialContacts = (function() {
    var rotator = $('.img-sponsors'),
        dir = 'images/commercial-contacts/',
        delayInSeconds = 5,
        num = 1,
        len = 2;

	var changeImage = function () {
		rotator.attr('src', dir + num + '.png').fadeIn(1000);
		rotator.attr('src', dir + num + '.png').fadeOut(4000);
        num = (num === len) ? 1 : ++num;

	};

	var initializeEvents = function () {
		setInterval(changeImage, delayInSeconds * 1000);
	};

	var init = function () {
		initializeEvents();
	};

	return {
		init: init
	};

}());

$(document).on('ready', CommercialContacts.init);
