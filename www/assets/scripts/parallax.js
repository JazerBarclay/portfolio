const elements = document.querySelectorAll('.parallax');

let currentY = [0];
let aimY = [0];
let speed = 1;
let i = 0;

let time = Date.now();
let wait = 20;

elements.forEach(x => {
  currentY[i] = 0;
  aimY[i] = 0;
  i++;
})

const animate = () => {
  
  if ((time + wait - Date.now()) < 0) {
    time = Date.now();
    
    i = 0;
    elements.forEach(x => {

      if (
          x.offsetTop + window.innerHeight*.8 > window.scrollY && 
          x.offsetTop - window.innerHeight*.8 < (x.offsetHeight + window.scrollY)
      ) {
        currentY[i] += (aimY[i] - currentY[i]) * speed;
        if (currentY[i] > 80) currentY[i] = 80;
        if (currentY[i] < -80) currentY[i] = -80;
        x.style.transform = `scale(1.2) translateY(${currentY[i]}px)`;
      }

      i++;
    })
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("scroll", (e) => {

  i = 0;

  elements.forEach(x => {
    let offsetEl = ((x.offsetTop - window.scrollY)/12 - ((x.offsetTop - window.scrollY)/5)) * -1;
    offsetEl = Math.round(offsetEl);
    aimY[i] = offsetEl;
    i++;
  })

});
