$(document).ready(function(){
  $('.discount__slider').slick({
  	prevArrow: '<div class="prev-arrow slick-arrow"><img src="img/icons/left.png" alt=""></div>',
  	nextArrow: '<div class="next-arrow slick-arrow"><img src="img/icons/right.png" alt=""></div>'
  });
});

$(document).ready(function(){
  $('.mob_discount__slider').slick({
  	prevArrow: null,
  	nextArrow: null
  });
});

$('.new-arriv_slider').slick({
	// centerMode: true,
 //  centerPadding: '60px',
  infinite: true,
  prevArrow: $('.slick2-prev'),
  nextArrow: $('.slick2-next'),
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.published-soon_slider').slick({
	// centerMode: true,
 //  centerPadding: '60px',
  infinite: true,
  prevArrow: $('.slick3-prev'),
  nextArrow: $('.slick3-next'),
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.news_slider').slick({
  // centerMode: true,
 //  centerPadding: '60px',
  infinite: true,
  prevArrow: $('.slick4-prev'),
  nextArrow: $('.slick4-next'),
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

function showCatalog() {
    if (topCatalog.style.display != "none") {
        topCatalog.style.display = "none";
    } else {
        topCatalog.style.display = "block";    }
}

