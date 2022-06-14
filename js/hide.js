$(function(){var pos=0;var header=$('#top-head');$(window).on('scroll',function(){if($(this).scrollTop()<pos){header.removeClass('hide')}else{header.addClass('hide')} pos=$(this).scrollTop()})})
