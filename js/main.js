$(document).ready(function() {

	var window = $('html, body');

	$("#about").click(function () {
		window.animate({
			scrollTop: $("#about-section").offset().top
		}, 1000);
	});

	$("#portfolio").click(function () {
		window.animate({
			scrollTop: $("#portfolio-section").offset().top
		}, 1000);
	});

	$("#contact").click(function () {
		window.animate({
			scrollTop: $("#contact-section").offset().top
		}, 1000);
	});

	$("#blog").click(function () {
		window.animate({
			scrollTop: $("#blog-section").offset().top
		}, 1000);
	});

	$("#to-top").click(function () {
		window.animate({
			scrollTop: $("#header-row").offset().top
		}, 1000);
	});

	$(document).scroll(function() {
		  var y = $(this).scrollTop();
		  if (y > 300) {
		    $("#to-top").fadeIn();
		  } else {
		    $("#to-top").fadeOut();
		  }
	});

});
