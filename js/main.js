function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const images =  document.querySelectorAll('img')

  function checkSlide(e) {
    images.forEach(image => {
      // half way through the image

      const isPassedHalf = (window.scrollY + window.innerHeight) > (image.offsetTop + (image.height / 2))

      const isNotPassedFull = window.scrollY < (image.offsetTop + image.height)


    if ((isPassedHalf) && ( isNotPassedFull )) {
        image.classList.add('active');
    } else {
        image.classList.remove('active');
    }



    })
  }

  window.addEventListener('scroll', debounce(checkSlide))
