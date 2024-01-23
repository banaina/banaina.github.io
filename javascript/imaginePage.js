

//offset() gets coordinates of element and scrollPos() gets scrollbar position
//https://stackoverflow.com/questions/34984911/make-header-navigation-change-colour-when-on-different-section-of-the-website

var top1 = $('#overview').offset().top;
var top2 = $('#insight').offset().top;
var top3 = $('#initialSol').offset().top;
var top4 = $('#finalProd').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();

  if (scrollPos >= top1 && scrollPos < top2) {
    $('#overviewNav').css('color', '#000000');
    $('#insightNav').css('color', '#727272');
    $('#initialSolNav').css('color', '#727272');
    $('#finalProdNav').css('color', '#727272');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#overviewNav').css('color', '#727272');
    $('#insightNav').css('color', '#000000');
    $('#initialSolNav').css('color', '#727272');
    $('#finalProdNav').css('color', '#727272');
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('#overviewNav').css('color', '#727272');
    $('#insightNav').css('color', '#727272');
    $('#initialSolNav').css('color', '#000000');
    $('#finalProdNav').css('color', '#727272');
  } else if (scrollPos >= top4) {
    $('#overviewNav').css('color', '#727272');
    $('#insightNav').css('color', '#727272');
    $('#initialSolNav').css('color', '#727272');
    $('#finalProdNav').css('color', '#000000');
  } 
  
});
