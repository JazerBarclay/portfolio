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

  checkActive(
    this.document.querySelector('#hero'), 
    this.document.querySelector('#nav-home'));

  checkActive(
    this.document.querySelector('#projects'), 
    this.document.querySelector('#nav-projects'));

  checkActive(
    this.document.querySelector('#about'), 
    this.document.querySelector('#nav-about'));

  checkActive(
    this.document.querySelector('#contact'), 
    this.document.querySelector('#nav-contact'));


});

function checkActive(section, nav) {
  if (window.scrollY >= section.offsetTop - 1 && this.window.scrollY < section.offsetTop + section.offsetHeight - 1) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

document.body.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 1024 && (e.pageY-this.window.scrollY) < document.querySelector('#header-background').offsetHeight) {
    document.querySelector('#header-background').style.transform = "translateY(0)";
  } else {
      document.querySelector('#header-background').style.transform = "translateY(-100%)";
  }
})