console.log('💩');

gsap.registerPlugin(ScrollTrigger);

gsap.from('.fade', {
  opacity: 0,
  y: 100,
  duration: 1,
});

//create a scene
// element we intend to trigger (.hello)
// triggerHook (point in screen we want to trigger)
// added 2 elements - setTween holds name of timeline
// addtoController

gsap.to('.scroll-text-1', {
  x: 3000,
  scrollTrigger: {
    trigger: '.header',
    start: 'top 10px',
    end: 'bottom 200px',
    scrub: true,
    markers: true,
    id: 'scrub',
  },
});

gsap.to('.scroll-text-2', {
  x: -2000,
  scrollTrigger: {
    trigger: '.header',
    start: 'top 10px',
    end: 'bottom 200px',
    scrub: true,
    markers: true,
    id: 'scrub',
  },
});

gsap.to('.scroll-text-3', {
  x: 3000,
  scrollTrigger: {
    trigger: '.header',
    start: 'top 10px',
    end: 'bottom 200px',
    scrub: true,
    markers: true,
    id: 'scrub',
  },
});
gsap.to('.scroll-text-4', {
  x: -2000,
  scrollTrigger: {
    trigger: '.header',
    start: 'top 10px',
    end: 'bottom 200px',
    scrub: true,
    markers: true,
    id: 'scrub',
  },
});

// new ScrollMagic.Scene({
//   triggerElement: ".hello",
//   triggerHook: 0.5
// }
// )

const slider = document.querySelector('.scroll-text-1');
const line2 = document.querySelector('.scroll-text-2');
const line4 = document.querySelector('.scroll-text-4');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 5; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

gsap.from('.zoom-img-left', {
  x: -400,
  scrollTrigger: {
    trigger: '.zoom-img-left',
    start: 'top 1000px',
    end: 'top 10px',
    // scrub: true,
    // markers: true,
    id: 'scrub',
  },
});

gsap.from('.zoom-img-right', {
  x: 1400,
  scrollTrigger: {
    trigger: '.zoom-img-right',
    start: 'top 1000px',
    end: 'top 10px',
    // scrub: true,
    // markers: true,
    id: 'scrub',
  },
});
