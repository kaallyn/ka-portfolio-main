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

$(document).ready(function(){
      $('.parallax').parallax();
    });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// BELOW IS NAV
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


$(function() {
    var header = $(".clearHeader");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});

// $(function() {
//     var card = $(".card");
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
    
//         if (scroll >= 500) {
//             card.addClass("orange");
//         } else {
//             card.removeClass("orange");
//         }
//     });
// });

jQuery(document).ready(function($){
  var card = $('.card'),
    quote = $('.quote'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(card, offset);
  hideBlocks(quote, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(quote, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(quote, offset); });
  });

  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(card, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
    });
  }
});