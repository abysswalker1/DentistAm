(function() {
  const slider = document.querySelector('.reviews-slider');

  slider.addEventListener('click', function(e)  {
    const t = e.target;
    const currentActive = this.querySelector('.reviews-slider__slide.active');
    const slide = t.closest('.reviews-slider__slide');

    if (slide) {
      currentActive.classList.remove('active');
      slide.classList.add('active');
    }
  });
}());