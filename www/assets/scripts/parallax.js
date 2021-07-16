
const elements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', function(e) {
    elements.forEach(x => {
        if (
            x.offsetTop + window.innerHeight/2 > window.scrollY && 
            x.offsetTop - window.innerHeight < (x.offsetHeight + window.scrollY)
          ) {
            let offsetEl = (x.offsetTop - window.scrollY)/6 - ((x.offsetTop - window.scrollY)/12);
            x.style.transform = `scale(1.2) translateY(${offsetEl}px)`;
          }
    });
});