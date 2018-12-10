$(document).ready(function() {
	setInterval(function() {
		var d = new Date(); // for now
		var hour = d.getHours(); // => 9
		var minute = d.getMinutes(); // =>  30
		var second = d.getSeconds(); // => 51

		if (hour.toString().length == 1 || minute.toString().length == 1 || second.toString().length == 1) {
			if (hour.toString().length == 1) {
				hour = '0' + hour;
			}
			if (minute.toString().length == 1) {
				minute = '0' + minute;
			}
			if (second.toString().length == 1) {
				second = '0' + second;
			}
		}
		var result = '' + hour + minute + second;
		//var time = hour + ':' + minute + ':' + second;
		//var hexacode = '#' + hour + minute + second;

		//$('#time').html('Current time : ' + time);
		//$('#hexacode').html('Hexadecimal Code : ' + hexacode);

		$('.colour').css('background-color', '#' + result);
	}, 1000);
	$('#imageCarousel').carousel();
});
