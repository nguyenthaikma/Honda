let count = 0;

const handlerOnClickIndicators = () => {
  let btn = $(".our-vehicles__indicator-item");
  btn.click(function () {
    if ($(".our-vehicles__indicator-item.active")) {
      $(".our-vehicles__indicator-item.active").removeClass("active");
    }
    this.classList.add("active");
    count = $(this).attr("data-slide-to");
  });
};

const indicatorSM = () => {
  let flagIndicator = false;
  $(".carousel-sm__heading").click(function () {
    $(".carousel-sm ol").slideToggle();
    flagIndicator = !flagIndicator;
    if (document.querySelector(".carousel-sm__icon.active")) {
      $(".carousel-sm__icon").removeClass("active");
      flagIndicator = false;
    } else {
      if (flagIndicator) {
        $(".carousel-sm__icon").addClass("active");
      } else {
        $(".carousel-sm__icon").removeClass("active");
      }
    }
  });
  $(".our-vehicles__indicator-item--sm").click(function () {
    $(".carousel-sm__title span").html($(this).html());
    $(".carousel-sm ol").slideUp();
    $(".carousel-sm__icon").removeClass("active");
    flagIndicator = false;
  });
};

const handlerNextAndPrevIndicator = () => {
  let arrayIndicatorMD = $(".our-vehicles__indicator-item--md");
  let arrayIndicatorSM = $(".our-vehicles__indicator-item--sm");
  $(".carousel-control-prev").click(function () {
    $(".our-vehicles__indicator-item--md").removeClass("active");
    if (count == 0) {
      count = arrayIndicatorMD.length - 1;
    } else {
      count--;
    }

    arrayIndicatorMD.each(function (i) {
      if (i === count) {
        $(this).addClass("active");
      }
    });

    arrayIndicatorSM.each(function (i) {
      if (i === count) {
        $(".carousel-sm__title span").html($(this).html());
      }
    });
  });

  $(".carousel-control-next").click(function () {
    $(".our-vehicles__indicator-item--md").removeClass("active");
    if (count == arrayIndicatorMD.length - 1) {
      count = 0;
    } else {
      count++;
    }

    arrayIndicatorMD.each(function (i) {
      if (i === count) {
        $(this).addClass("active");
      }
    });

    arrayIndicatorSM.each(function (i) {
      if (i === count) {
        $(".carousel-sm__title span").html($(this).html());
      }
    });
  });
};

const footerMid = () => {
  let isClick = false;
  $(".js-footer-mid__title").click(function () {
    let ulElement = $(".footer-mid__list");
    isClick = !isClick;
    for (let item of ulElement) {
      if ($(this).data("id") === $(item).data("id")) {
        $(item).slideToggle();
        if (isClick) {
          if (this.classList.length >= 5) {
            $(this).removeClass("active");
          } else {
            $(this).addClass("active");
          }
        } else {
          if (this.classList.length <= 4) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        }
      }
    }
  });
};

const scrollTop = () => {
  $('.back-to-top').click(function() {
    $(document).scrollTop(0);
  })

  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('.back-to-top').css({
        transform: 'translateX(105%)'
      })
      // downscroll code
    } else {
      if(st > 800) {
        $('.back-to-top').css({
          transform: 'translateX(0)'
        })
      } else {
        $('.back-to-top').css({
          transform: 'translateX(105%)'
        })
      }
      // upscroll code
    }
    lastScrollTop = st;
  });
}

$(document).ready(function () {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $(".continue__left").addClass("animate__animated animate__fadeInUp");
      $(".continue__left").css({
        "-webkit-animation-duration": "1s",
        "animation-duration": "1s",
        display: "flex",
      });

      $(".continue__right").addClass("animate__animated animate__fadeInUp");
      $(".continue__right").css({
        "-webkit-animation-duration": "1s",
        "animation-duration": "1s",
        "animation-delay": "0.4s",
        display: "flex",
      });
    }

    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      $(".intro-1__left").addClass("animate__animated animate__fadeInUp");
      $(".intro-1__left").css({
        "-webkit-animation-duration": "1s",
        "animation-duration": "1s",
      });

      $(".intro-1__right").addClass("animate__animated animate__fadeInUp");
      $(".intro-1__right").css({
        "-webkit-animation-duration": "1s",
        "animation-duration": "1s",
      });
    }
  };

  handlerOnClickIndicators();

  //indicators sm
  indicatorSM();
  handlerNextAndPrevIndicator();

  //Footer
  footerMid();

  //ScrollTop
  scrollTop();

  $(window).resize(function() {
    let width = $(window).width();
    if(width >= 992 ) {
      console.log([$('navbar-nav.nav__list-right')]);
      $('.navbar-nav.nav__list-right').removeClass('animate__fadeOutRight animate__animated');
    }
  })
});
