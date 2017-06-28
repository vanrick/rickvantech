// window.onbeforeunload = function () {
//   window.scrollTo(0,0);
// }
// $(document).ready(function () {
//   var trigger = $('.hamburger'),
//       overlay = $('.overlay'),
//      isClosed = false;
//
//     trigger.click(function () {
//       hamburger_cross();
//     });
//
//     function hamburger_cross() {
//
//       if (isClosed == true) {
//         overlay.hide();
//         trigger.removeClass('is-open');
//         trigger.addClass('is-closed');
//         isClosed = false;
//       } else {
//         overlay.show();
//         trigger.removeClass('is-closed');
//         trigger.addClass('is-open');
//         isClosed = true;
//       }
//   }
//
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

// function waitPlease(){
//
//   $('.skillbar').each(function(){
//     $(this).find('.skillbar-bar').animate({
//       width:$(this).attr('data-percent')
//     },6000);
//   })
//
// }
//   setTimeout(waitPlease, 2000);
//
// }); // end of ready function





// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

console.log('( ◑‿◑)ɔ┏🍟--🍔┑٩(^◡^ )');
