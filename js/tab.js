(function($) {
$(function() {

	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	$('ul.form-tab-head').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('div').removeClass('active').eq(cookie).addClass('active')
				.closest('div.form-tab').find('div.form-tab__body-item').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.form-tab-head').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.form-tab').find('div.form-tab__body-item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.form-tab-head').index($(this).parents('ul.form-tab-head'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
		
	});

	$('ul.video-tab-head').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('div').removeClass('active').eq(cookie).addClass('active')
				.closest('div.video-tab').find('div.video-tab__item').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.video-tab-head').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.video-tab').find('div.video-tab__item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.video-tab-head').index($(this).parents('ul.video-tab-head'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
		
	});


	$('ul.tab-traning__head').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('div').removeClass('active').eq(cookie).addClass('active')
				.closest('div.tab-traning').find('div.tab-traning__item').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.tab-traning__head').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tab-traning').find('div.tab-traning__item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.tab-traning__head').index($(this).parents('ul.tab-traning__head'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
		
	});
	
	$('ul.tab-head').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('div').removeClass('active').eq(cookie).addClass('active')
				.closest('div.tab').find('div.tab-item').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.tab-head').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tab').find('div.tab-item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.tab-head').index($(this).parents('ul.tab-head'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
		
	});
	
	

});
})(jQuery);