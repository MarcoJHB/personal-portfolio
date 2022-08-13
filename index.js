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

// Awesome Text Changer

const awesomeText = document.querySelector('.awesome-text');

function changeText(newText) {
  // item.animate(...) returns an Animation (refer to https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)
  let animation = awesomeText.animate(
    [
      // keyframes
      { transform: 'translateY(0px)', opacity: '1' },
      { transform: 'translateY(1px)', opacity: '0.9' },
      { transform: 'translateY(4px)', opacity: '0.7' },
      { transform: 'translateY(9px)', opacity: '0.5' },
      { transform: 'translateY(14px)', opacity: '0.3' },
    ],
    {
      // timing options
      duration: 200,
    }
  );
  /* The Animation has an eventHandler
      refer to here: https://developer.mozilla.org/en-US/docs/Web/API/Animation
      and here: https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish
    */
  animation.onfinish = function () {
    // change text
    awesomeText.innerText = newText;
    // and start the second animation
    awesomeText.animate(
      [
        // keyframes
        { transform: 'translateY(14px)', opacity: '0.3' },
        { transform: 'translateY(9px)', opacity: '0.5' },
        { transform: 'translateY(4px)', opacity: '0.7' },
        { transform: 'translateY(1px)', opacity: '0.9' },
        { transform: 'translateY(0px)', opacity: '1' },
      ],
      {
        // timing options
        duration: 200,
      }
    );
  };
}

const afrikaansText = document.querySelectorAll('.afrikaans');
const chineseText = document.querySelectorAll('.chinese');
const frenchText = document.querySelectorAll('.french');
const germanText = document.querySelectorAll('.german');
const greekText = document.querySelectorAll('.greek');
const koreanText = document.querySelectorAll('.korean');
const italianText = document.querySelectorAll('.italian');
const spanishText = document.querySelectorAll('.spanish');
const zuluText = document.querySelectorAll('.zulu');

afrikaansText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('ontsagwekkende');
    }
  });
});
chineseText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('惊人');
    }
  });
});
frenchText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('extraordinaire');
    }
  });
});

germanText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('verblüffend');
    }
  });
});
greekText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      // awesomeText.innerText = 'φοβερό';
      changeText('φοβερό');
    }
  });
});

koreanText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('엄청난');
    }
  });
});

italianText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('eccezionale');
    }
  });
});

spanishText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('increíble');
    }
  });
});
zuluText.forEach((text) => {
  text.addEventListener('mouseover', () => {
    {
      changeText('emangalisayo');
    }
  });
});
