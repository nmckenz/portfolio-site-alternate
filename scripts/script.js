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

  // REGEX
  // validateEmail = (email) => {
  //   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return regex.test(email)
  // }

  // $("form").on("submit", () => {
  //   const userEmail = $("#email").val();

  // })

});