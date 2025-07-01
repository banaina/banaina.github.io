

//offset() gets coordinates of element and scrollPos() gets scrollbar position
//https://stackoverflow.com/questions/34984911/make-header-navigation-change-colour-when-on-different-section-of-the-website

var top1 = $('#overview').offset().top;
var top2 = $('#ideation').offset().top;
var top3 = $('#design').offset().top;
var top4 = $('#finalmodel').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();

  if (scrollPos >= top1 && scrollPos < top2) {
    $('#overviewNav').css('color', '#000000');
    $('#ideationNav').css('color', '#727272');
    $('#designNav').css('color', '#727272');
    $('#finalmodelNav').css('color', '#727272');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#overviewNav').css('color', '#727272');
    $('#ideationNav').css('color', '#000000');
    $('#designNav').css('color', '#727272');
    $('#finalmodelNav').css('color', '#727272');
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('#overviewNav').css('color', '#727272');
    $('#ideationNav').css('color', '#727272');
    $('#designNav').css('color', '#000000');
    $('#finalmodelNav').css('color', '#727272');
  } else if (scrollPos >= top4) {
    $('#overviewNav').css('color', '#727272');
    $('#ideationNav').css('color', '#727272');
    $('#designNav').css('color', '#727272');
    $('#finalmodelNav').css('color', '#000000');
  } 
  
});