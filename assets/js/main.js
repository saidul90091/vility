// preloader 
$(window).on("load", function () {
	var preLoder = $("#preloader");
	preLoder.fadeOut(1000);

  });

// scrolling button
var btn = $('#scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// nav bar 
var fixed_top = $(".header_section");
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $("body").addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp");
            $("body").removeClass("body-padding");
        }
    });


// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    autoplay:
    {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      426: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween:20,
      },
  
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1400:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1650: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });


// odometer counter
$(".odometer").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (
        var i = 0;
        i < document.querySelectorAll(".odometer").length;
        i++
      ) {
        var el = document.querySelectorAll(".odometer")[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});


// wow 
new WOW().init();

	//Magnifiq pupup
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});

