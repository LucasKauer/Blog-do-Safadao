var Playlist = (function() {
	var _default = {
		"src": $("#playlist li").eq(0).attr("movieurl")
	};
	
	var configurePlaylist = function () {
		$('#videoarea').attr(_default);
	};
	
	var configurePlayer = function () {
		$("#videoarea").attr({
			"src": $(this).attr("movieurl"),
			"autoplay": "autoplay"
		});
	};
	
	var initializeEvents = function() {
		$("#playlist li").on("click", configurePlayer);
	};
	
	var init = function () {
		configurePlaylist();
		initializeEvents();
	};
	
	return {
		init: init
	};
}());

$(document).on('ready', Playlist.init);