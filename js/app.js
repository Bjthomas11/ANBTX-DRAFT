$(document).ready(() => {
  // Add smooth scrolling to all links
  $("a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        () => {
          // Add hash (#) to URL when done scrolling
          window.location.hash = hash;
        }
      );
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
plusSlides => n => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
currentSlide => n => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let sliders = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].className = sliders[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  sliders[slideIndex - 1].className += " active";
}
