$(function(){$('#nav_toggle').click(function(){$("#top-head").toggleClass('open');$("nav").slideToggle(500)});$('nav a').click(function(){if(window.innerWidth<=680){$("#top-head").toggleClass('open');$("nav").slideToggle(500)}})})
$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});

