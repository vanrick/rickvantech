// $(document).ready(function() {
//
//     $("#navbar").hide(); //Hide the navigation bar first
//
//     $(window).scroll(function() { //Listen for the window's scroll event
//       if (isScrolledAfterElement("#page2")) { //if it has scrolled beyond the #content elment
//         $('#navbar').fadeIn(); //Show the navigation bar
//       } else {
//         $('#navbar').fadeOut(); //Else hide it
//       }
//     });
//
//     // Function that returns true if the window has scrolled beyond the given element
//     function isScrolledAfterElement(elem) {
//       var $elem = $(elem);
//       var $window = $(window);
//
//       var docViewTop = $window.scrollTop();
//       var docViewBottom = docViewTop + $window.height();
//
//       var elemTop = $elem.offset().top;
//
//       return elemTop <= docViewBottom;
//     }
//   });


// $(document).ready(function() {
//       $('#fullpage').fullpage({
//           sectionsColor: ['#f2f2f2','#4BBFC3','#7BAABE','whitesmoke'],
//           css3: true
//       });
//
//   });


// $(document).ready(function(){
//     $("#wrapper").fullpage();
//   })

jQuery(function(){
  $('#wrapper').fullpage({
      // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
      onLeave: function(index, nextIndex, direction){

          //leaving 1st section
          if(index == 1){
            $('#navbar').fadeIn();
            $('#navbar').addClass('hidden')
          }
          //back to the 1st section
          if(nextIndex == 1){
  		      $('#navbar').fadeOut();
            $('#navbar').removeClass('hidden')
          }
      },

      afterResize: function(){
          windowsHeight = $(window).height();
      }
  });
// gif hover start
  $(".gif").hover(
      function()
      {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, ".gif"));
      },
      function()
      {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.gif$/i, ".png"));
      });

// navbar hover
$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
          $('#navbar > ul > li > a').removeClass('navActive');
          $('#navbar > ul > li > a[href=#' + id + ']').addClass('navActive');
      }
    })
})

})

// $(document).ready(function() {
//
// 	var $navigationLinks = $('#navbar > ul > li > a');
// 	var $sections = $(".section");
// 	var $sectionsReversed = $($(".section").get().reverse());
// 	var sectionIdTonavigationLink = {};
//
// 	$sections.each(function() {
// 		sectionIdTonavigationLink[$(this).attr('id')] = $('#navbar > ul > li > a[href=#' + $(this).attr('id') + ']');
// 	});
//
// 	function unoptimized() {
// 		var scrollPosition = $(window).scrollTop();
//
// 		$('.section').each(function() {
// 		    var sectionTop = $(this).offset().top;
// 		    var id = $(this).attr('id');
//
// 		    if (scrollPosition >= sectionTop) {
// 		        $('#navbar > ul > li > a').removeClass('navActive');
// 		        $('#navbar > ul > li > a[href=#' + id + ']').addClass('navActive');
// 		    }
// 		});
// 	}
//
// 	function cachingObjects() {
// 		var scrollPosition = $(window).scrollTop();
//
// 		$sections.each(function() {
// 		    var sectionTop = $(this).offset().top;
// 		    var id = $(this).attr('id');
//
// 		    if (scrollPosition >= sectionTop) {
// 		        $navigationLinks.removeClass('navActive');
// 		        $navigationLinks.filter('[href=#' + id + ']').addClass('navActive');
// 		    }
// 		});
// 	}
//
// 	function improvedLoop() {
// 		var scrollPosition = $(window).scrollTop();
//
// 		$($(".section").get().reverse()).each(function() {
// 		    var currentSection = $(this);
// 		    var sectionTop = currentSection.offset().top;
//
// 		    if (scrollPosition >= sectionTop) {
// 		        var id = currentSection.attr('id');
// 		        var $navigationLink = $('#navbar > ul > li > a[href=#' + id + ']');
// 		        if (!$navigationLink.hasClass('active')) {
// 		            $('#navbar > ul > li > a').removeClass('navActive');
// 		            $navigationLink.addClass('navActive');
// 		        }
// 		        return false;
// 		    }
// 		});
// 	}
//
// 	function mapSections() {
// 		var scrollPosition = $(window).scrollTop();
//
// 		$('.section').each(function() {
// 		    var sectionTop = $(this).offset().top;
// 		    var id = $(this).attr('id');
//
// 		    if (scrollPosition >= sectionTop) {
// 		        $('#navbar > ul > li > a').removeClass('navActive');
// 		        sectionIdTonavigationLink[id].addClass('navActive');
// 		    }
// 		});
// 	}
//
// 	function optimized() {
// 		var scrollPosition = $(window).scrollTop();
//
// 		$sectionsReversed.each(function() {
// 		    var currentSection = $(this);
// 		    var sectionTop = currentSection.offset().top;
//
// 		    if (scrollPosition >= sectionTop) {
// 		        var id = currentSection.attr('id');
// 		        var $navigationLink = sectionIdTonavigationLink[id];
// 		        if (!$navigationLink.hasClass('navActive')) {
// 		            $navigationLinks.removeClass('navActive');
// 		            $navigationLink.addClass('navActive');
// 		        }
// 		        return false;
// 		    }
// 		});
// 	}
//
// 	function throttleUnoptimized() {
// 		return throttle( unoptimized, 100 );
// 	}
//
// 	function throttleOptimized() {
// 		return throttle( optimized, 100 );
// 	}
//
// 	$('#clear').click(function() {
// 		$('#results').html('');
// 		iniTests();
// 	});
//
// 	$('#autoscroll').click(function() {
// 		var position = 0;
// 		var direction = 1;
// 		var intervalId = setInterval(scrollMe, 16);
//
// 		function scrollMe() {
// 		    position += 20 * direction;
// 		    if (position >= $(document).height() - $(window).height() || position == 0) {
// 		        clearInterval(intervalId);
// 		        if (direction == 1) {
// 		            direction = -1;
// 		            intervalId = setInterval(scrollMe, 16);
// 		        }
// 		    }
// 		    $(window).scrollTop(position);
// 		}
// 	});
//
// 	var test = {};
//
// 	function iniTests() {
// 		test = {
// 		    unoptimized: new TestPerformance(unoptimized, $('#results')),
// 		    cachingObjects: new TestPerformance(cachingObjects, $('#results')),
// 		    improvedLoop: new TestPerformance(improvedLoop, $('#results')),
// 		    mapSections: new TestPerformance(mapSections, $('#results')),
// 		    optimized: new TestPerformance(optimized, $('#results')),
// 		    throttleUnoptimized: new TestPerformance( throttleUnoptimized, $('#results')),
// 		    throttleOptimized: new TestPerformance(throttleOptimized, $('#results'))
// 		}
// 	}
// 	iniTests();
//
// 	$(window).scroll(function() {
// 		test[$("input[name='test']:checked").val()].measureTime();
// 	});
//
// });
