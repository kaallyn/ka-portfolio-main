var slideNumber = 0;

function prevSlide() {
	// if prev takes us beyond our min number of slides
	// reset
	if (slideNumber <= 0) {
		slideNumber = 2;
	} else {
		slideNumber = slideNumber - 1; // slideNumber--;
	}
	console.log("Current slide is now: " + slideNumber);
	renderSlide('left');
}

function nextSlide() {
	// if next takes us beyond our max num of slides
	// reset number
	if (slideNumber >= 2) {
		slideNumber = 0;
	} else {
		slideNumber = slideNumber + 1; // slideNumber++;
	}
	console.log("Current slide is now: " + slideNumber);
	renderSlide('right');
}

function renderSlide(direction) { // direction will be left or right

	console.log('We will render slide #: ' + slideNumber);
	switch(slideNumber) {
		case 0: // show the first slide
		// code here
		// to show slide 0
		console.log('add/hide divs to show slide #1');
		if (direction === 'left') { // if we are going left (back/prev)
			$('.slide3').addClass('sliderRight'); // slide #3 to the right
			$('.bannerBg1').removeClass('hidden');

			$('.slide1').addClass('slideAppear'); // show slide 1
			$('.bannerBg3').addClass('sliderRight'); // slide #3's background to the right
		} else if (direction === 'right') { // do the same thing here except slide to left
			
			$('.bannerBg1').removeClass('sliderLeft');
			$('.slide3').addClass('sliderLeft');
			$('.slide1').addClass('slideAppear');
			$('.bannerBg3').addClass('sliderLeft');
			
			
		}
		break;

		case 1:
		// code here 
		// to show slide 1
		if (direction === 'left') {
			$('.slide2').addClass('sliderRight');
			$('.slide3').addClass('slideAppear');
			

			$('.bannerBg2').addClass('sliderRight');
		} else if (direction === 'right') {
			$('.bannerBg2').removeClass('hidden');
			$('.slide1').addClass('sliderLeft');
			$('.slide2').addClass('slideAppear');
			
			$('.bannerBg1').addClass('sliderLeft');
			$('.bannerBg1').addClass('hidden');
			// $('.bannerBg1').addClass('resetPosition');
			// $('.bannerBg1').removeClass('sliderLeft');
		}
		break;
		case 2: 
		// code here to 
		// show slide 2
		if (direction === 'left') {
			$('.slide1').addClass('sliderRight');
			$('.slide3').addClass('slideAppear');
			$('.bannerbg3').addClass('slideAppear');
			$('.bannerbg3').removeClass('hidden');
			$('.bannerBg1').addClass('sliderRight');

		} else if (direction === 'right') {
			$('.bannerBg2').addClass('resetPosition');
			$('.bannerBg3').removeClass('hidden');
			$('.slide2').addClass('sliderLeft');
			$('.slide3').addClass('slideAppear');
			$('.bannerBg2').addClass('sliderLeft');
		}
		console.log('add/hide divs to show slide #3')
		break;
	}
}

$(document).ready(function(evt) {

  console.log('Animations Boilerplate is a go.');

// scrolling function starts
	// jQuery(document).ready(function() {
	//     jQuery('.site').addClass("animateHidden").viewportChecker({
	//         classToAdd: 'animateVisible animated fadeIn',
	//         offset: 100
	//        });
	// });
// scrolling functions ends



	$('.hamburger').on('click', function (e) {
	  	e.preventDefault();

	  

		if ($("nav.active")[0]){
			$('.hamburger').toggleClass('activeX');
			$('.content').removeClass('slidingContent');
			$('nav').slideUp(300, function(){
				$(this).removeClass('active').css('display','');
				
			});
		} else {
			$('.hamburger').toggleClass('activeX');
			$('.content').addClass('slidingContent');
		 	$('nav').slideDown(300, function(){
				$(this).addClass('active');
				
			});
		}


	});


	$('.expand').on('click', function (e) {
	  e.preventDefault();
	  		$(this).children('.line').toggleClass('active');

			    $(this).parent('.menuCategory').siblings('.menuItems').slideToggle('showItems')


	});




	$('.arrow-right').on('click', function(e) {

		nextSlide();
	    $('.pawRight').addClass("pawIn").delay(300).queue(function(next){
	    		$(this).removeClass("pawIn");
	    	next();
		});
		
	});


	$('.arrow-left').on('click', function(e) {

		prevSlide();
		// $('.slide2').addClass('sliderRight');
		// // $('.slide2').addClass('slideAppear');
		// $('.bannerBg2').addClass('sliderRight');
		$('.pawLeft').addClass("pawIn").delay(300).queue(function(next){
	    		$(this).removeClass("pawIn");
	    	next();
		});
	});

	// SLIDER ARROWS BELOW

	$('.arrow-left').on('mouseover', function(e) {
		$(this).children('.arrow-line-south').addClass('hoverArrow');
		$(this).children('.arrow-line-north').addClass('hoverArrow');
	});

	$('.arrow-left').on('mouseout', function(e) {
		$(this).children('.arrow-line-south').removeClass('hoverArrow');
		$(this).children('.arrow-line-north').removeClass('hoverArrow');
	});

	$('.arrow-right').on('mouseover', function(e) {
		$(this).children('.arrow-line-north').addClass('hoverArrow');
		$(this).children('.arrow-line-south').addClass('hoverArrow');
	});

	$('.arrow-right').on('mouseout', function(e) {
		$(this).children('.arrow-line-south').removeClass('hoverArrow');
		$(this).children('.arrow-line-north').removeClass('hoverArrow');
	});

	// END SLIDER ARROWS




	

});