window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });


// scroll
// home scroll

  // function scrollToAnchor(aid){
  //   var aTag = $("a[name='"+ aid +"']");
  //   $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  // }
  //   $("#homeLink").click(function() {
  //     scrollToAnchor('#page-1')
  //   });
  //
  // $("#link1").click(function() {
  //   scrollToAnchor('id1')
  // });
  //
  // $("#link2").click(function() {
  //   scrollToAnchor('id2')
  // });
  //
  // $("#link3").click(function() {
  //   scrollToAnchor('id3')
  // });
  //
  // $("#link4").click(function() {
  //   scrollToAnchor('id4')
  // });
  //
  // $("#link5").click(function() {
  //   scrollToAnchor('id5')
  // });
  //
  // $("#link6").click(function() {
  //   scrollToAnchor('id6')
  // });
  //
  // $("#link7").click(function() {
  //   scrollToAnchor('id7')
  // });

  // $('a[href*=#]').bind('click', function(e) {
 // 	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
  //
 // 	var target = $(this).attr("href"); //Get the target
  //
 // 	// perform animated scrolling by getting top-position of target-element and set it as scroll target
 // 	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
 // 	     location.hash = target + 300;  //attach the hash (#jumptarget) to the pageurl
 // 	});
  //
 // 	return false;
  //   });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
