document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#testimonial-carousel', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '24px',
    arrows: false,
    pagination: true,
    focus: 'center',
    drag: 'free',
    snap: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
      767: {
        perPage: 1,
        gap: '20px',
      },
      767: {
        perPage: 1,
        gap: '16px',
        padding: { left: '16px', right: '16px' },
      },
    },
  });
 

  var bar = document.querySelector('#testimonial-carousel .my-slider-progress-bar');
  splide.on('mounted move', function () {
    const totalSlides = splide.length;
    const currentIndex = splide.index;
    const rate = totalSlides > 0 ? Math.min((currentIndex + 1) / totalSlides, 1) : 0;
    bar.style.width = `${100 * rate}%`;

    const cards = document.querySelectorAll('#testimonial-carousel .card');
    cards.forEach((card, i) => {
      card.classList.remove('border-2', 'border-red-500');
      card.classList.add('border');
    });

    const currentSlide = splide.Components.Slides.getAt(splide.index);
    if (currentSlide) {
      const activeCard = currentSlide.slide.querySelector('.card');
      if (activeCard) {
        activeCard.classList.remove('border');
        activeCard.classList.add('border-2', 'border-red-500');
      }
    }
  });

  document.getElementById('prev-testimonial').addEventListener('click', () => splide.go('<'));
  document.getElementById('next-testimonial').addEventListener('click', () => splide.go('>'));

  splide.mount();
});