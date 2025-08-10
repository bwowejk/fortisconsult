const images = [
  '/images/optimized/IMG_4273.jpeg',
  '/images/optimized/IMG_4834.jpeg',
  '/images/optimized/IMG_3934.jpeg'
];

const section = document.querySelector('.section-one');
const fadeMs = 2000; // must match --fade-duration in CSS (ms)
const intervalMs = 4000;

let current = 0;
let next = (current + 1) % images.length;

// preload images to avoid flicker
images.forEach(src => { const img = new Image(); img.src = src; });

// initialize CSS vars
section.style.setProperty('--top-image', `url(${images[current]})`);
section.style.setProperty('--base-image', `url(${images[next]})`);
section.style.setProperty('--fade-duration', `${fadeMs}ms`);

setInterval(() => {
  // start the fade: top image will animate to opacity: 0
  section.classList.add('fade-top');

  // when fade finishes, rotate images and reset instantly (no transition)
  setTimeout(() => {
    // advance indexes
    current = next;
    next = (current + 1) % images.length;

    // set the top image to the one we just revealed (so it's ready for the next cycle)
    section.style.setProperty('--top-image', `url(${images[current]})`);

    // pre-set the base (incoming) image for the next reveal
    section.style.setProperty('--base-image', `url(${images[next]})`);

    // disable transition, remove fade (jump opacity back to 1 instantly)
    section.classList.add('no-transition');
    // force reflow so the no-transition takes effect immediately
    void section.offsetWidth;
    section.classList.remove('fade-top'); // opacity jumps to 1 (no animation)

    // re-enable transitions for future fades
    // small timeout so browser applies the no-transition immediate jump
    setTimeout(() => section.classList.remove('no-transition'), 50);
  }, fadeMs);

}, intervalMs);
