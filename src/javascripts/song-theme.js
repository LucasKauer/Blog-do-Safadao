var SongTheme = (function() {
	var KEY_ENTER = 13; 
	var KEY_SPACE = 32;
	var KEY_LEFT  = 37; 
	var KEY_RIGHT = 39;
	
	var player = document.getElementById('player');
	
	var settings = {
		path: 'tunes/',
		tracks: ['01. CAMAROTE.mp3',
				 '02. NOCAUTE.mp3',
				 '03. GELO NA BALADA.mp3',
				 '04. VIROTE.mp3',
				 '05. LIVRE NA BALADA.mp3',
				 '06. CIUMENTO MESMO.mp3']
	};
	
	var configureKonami = function () {
		var easterEgg = new Konami();
		easterEgg.code = playNext;
		easterEgg.load();
	};
	
	var playNext = function () {
		var track = settings.tracks[Math.floor(Math.random() * settings.tracks.length)];

		player.src = settings.path + track;
		return player.play();
	};
	
	var configureAudio = function(e) {
		var windowObject = configureEventObject(e);
		
		var keyCodeValue = (windowObject.keyCode ? windowObject.keyCode : windowObject.which);
		var pressedCtrlKey = windowObject.ctrlKey;
		
		if(pressedCtrlKey) {
			if (keyCodeValue == KEY_ENTER) {
				play();
			} else if (keyCodeValue == KEY_SPACE) {
				pause();
			} else if (keyCodeValue == KEY_RIGHT) {
				turnUp();
			} else if (keyCodeValue == KEY_LEFT) {
				lower();
			}
		}
	};
	
	var configureEventObject = function (event) {
		// IE
		if (window.event) {
			return window.event;
		} else {
			return event;
		}
	};
	
	var play = function () {
		player.play();
	};
	
	var pause = function () {
		player.pause();
	};
	
	var turnUp = function (){
        if (player.volume < 1) {
			player.volume += 0.1;
		}
    };
 
    var lower = function (){
        if (player.volume > 0) {
			player.volume -= 0.1;
		}
    };
	
	var initializeEvents = function() {
		player.addEventListener('ended', playNext);
		$(document).keypress(configureAudio);
	}
	
	var init = function () {
		configureKonami();
		initializeEvents();
	};
	
	return {
		init: init
	};
}());

$(document).on('ready', SongTheme.init);