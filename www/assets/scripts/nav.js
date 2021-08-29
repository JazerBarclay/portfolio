var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;

});

document.body.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 1024 && (e.pageY-this.window.scrollY) < document.querySelector('#header-background').offsetHeight) {
    document.querySelector('#header-background').style.transform = "translateY(0)";
  } else {
      document.querySelector('#header-background').style.transform = "translateY(-100%)";
  }
})