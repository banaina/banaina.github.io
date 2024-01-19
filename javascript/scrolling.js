

//offset() gets coordinates of element and scrollTop() gets scrollbar position
//https://stackoverflow.com/questions/34984911/make-header-navigation-change-colour-when-on-different-section-of-the-website
var top1 = $('#about').offset().top;
var top2 = $('#projects').offset().top;
var top3 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#aboutNav').css('color', '#000000');
    $('#projectsNav').css('color', '#727272');
    $('#contactNav').css('color', '#727272');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#projectsNav').css('color', '#000000');
    $('#contactNav').css('color', '#727272');
    $('#aboutNav').css('color', '#727272');
  } else if (scrollPos >= top3) {
    $('#contactNav').css('color', '#000000');
    $('#aboutNav').css('color', '#727272');
    $('#projectsNav').css('color', '#727272');
  }
});
