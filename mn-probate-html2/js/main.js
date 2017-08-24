// $('.hamburger').on('click', function (e) {
//   e.preventDefault();

// 	  if ($(".showNav")[0]){
// 	    $('nav').slideUp();
// 	    $('nav').removeClass('showNav');
// 	    // Do something if class exists
// 	} else {
// 	      $('nav').slideDown();
// 	      console.log ( 'nav slid down!' );
// 	      $('nav').addClass('showNav');
// 	}


// });


// BELOW IS JS FROM TWIN KITTIES NAV
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