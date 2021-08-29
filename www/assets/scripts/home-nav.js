var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {

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
      if (!nav.classList.contains('active')) nav.classList.add('active')
    } else {
      if (nav.classList.contains('active')) nav.classList.remove('active')
    }
  }