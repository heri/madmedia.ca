$("document").ready(function() {

	// CUFON - font replacement

	Cufon.replace('.light h3', {
		textShadow: 'rgba(255,255,255,.5) 0px 1px 0px'
	});
	
	Cufon.replace('.glass h3', {
		textShadow: 'rgba(255,255,255,.5) 0px 1px 0px'
	});
	
	Cufon.replace('.dark h3', {
		textShadow: 'rgba(0,0,0,.5) 0px 1px 0px'
	});
	
	Cufon.replace('span.title');
	
	
	// Download vCard bubble

	$(".header a.vcard").hover(function() { //mouseover
		$(".header p.bubble").show();
		$(".header p.bubble").animate({
			top: "8px"
		}, 250 );
	}, function() { // mouseout
		$(".header p.bubble").animate({ 
			top: "0px"
		}, 250 );
		setTimeout("$('.header p.bubble').hide();", 250);
		$(".header p.bubble").animate({ 
			top: "0px"
		}, 250 );
	});
	
	
	// Tab System

	$('ul.nav').each(function() {
		var $links = $(this).find('a'),
			panelIds = $links.map(function() { return this.hash; }).get().join(","),
			$panels = $(panelIds),
			$panelWrapper = $panels.filter(':first').parent(),
			delay = 500;
			
		$panels.hide();

		$links.click(function() {
			var $link = $(this),
				link = (this);
				
			if ($link.is('.current')) {
				return;
			}
		
			$links.removeClass('current');
			$link.addClass('current');
			
			$panels.animate({ opacity : 0 }, delay);
			$panelWrapper.animate({
				height: 0
			}, delay, function() {
				// var height = $panels.hide().filter(link.hash).show().css('opacity', 1).outerHeight();
				
				var filtered = $panels.hide().filter(link.hash).show().css('opacity', 1);
				if ($.browser.msie)
				  filtered.each(function() { this.style.removeAttribute('filter'); });
				var height = filtered.outerHeight();
							
				$panelWrapper.animate({
					height: height
				}, delay);
			});	
			
			return false;
		});
		
		var showtab = window.location.hash ? '[hash=' + window.location.hash + ']' : ':first';
		
		$links.filter(showtab).click();
	
	});
	
	
	// jQuery Cycle plugin (portfolio tab)
	
	$(".folio")
	.addClass('working')
	.after('<div id="pager">') 
	.cycle({
		fx:		'scrollHorz',
		pager:  '#pager'
	});	
	
	// Contact Form
	
	$('#contactform').ajaxForm({
	   	target: '#error',
	   	beforeSubmit: function() {	
	   		$('#error p').remove();
			$('#error').append('<p class="loading">Sending your message...</p>');
		},
		success: function() {
			$('#error p.loading').fadeOut();
			$('#error').fadeIn('slow');
		}
	});

	
});