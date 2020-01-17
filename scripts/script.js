$(function () {
    // CAROUSEL CONFIGURATION
    $('.slickContainer').slick({
        slidesToShow: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        dots: true,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
  });

  // let options = {
  //   threshold: [0.33, 0.66, 1]
  // };

  // let observer = new IntersectionObserver(callback, options);

  // let target = document.querySelector("#about");
  // observer.observe(target)
});