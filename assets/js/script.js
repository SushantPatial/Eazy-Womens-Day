// On Scroll
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) {
    $("#header").addClass('header-scrolled');
    $("#logo a img").attr('src', 'assets/images/ERP & DMS LOGO White.png');
    $(".back-to-top").addClass('active');
  } else {
    $("#header").removeClass('header-scrolled');
    $("#logo a img").attr('src', 'assets/images/ERP & DMS LOGO.png');
    $(".back-to-top").removeClass('active');
  }
})
$(window).on('load', function() {
  if ($(window).scrollTop() > 100) {
    $("#header").addClass('header-scrolled');
    $("#logo a img").attr('src', 'assets/images/ERP & DMS LOGO White.png');
    $(".back-to-top").addClass('active');
  } else {
    $("#header").removeClass('header-scrolled');
    $("#logo a img").attr('src', 'assets/images/ERP & DMS LOGO.png');
    $(".back-to-top").removeClass('active');
  }
})

// AOS
AOS.init({
  disable: true,
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

// Footer year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;