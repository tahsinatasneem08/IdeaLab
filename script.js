// Loader

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1200);

});

// GLASS NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");
  }

});


// Project Details Modal

function openProject(title, description) {

  const details = document.getElementById("project-details");

  document.getElementById("project-title").innerText = title;

  document.getElementById("project-description").innerText = description;

  details.classList.remove("hidden");

  details.scrollIntoView({
    behavior: "smooth"

  });

}

function closeProject() {
  document.getElementById("project-details")
    .classList.add("hidden");
}


// Stats Counters

const counters =
  document.querySelectorAll(".counter");

const statsSection =
  document.querySelector(".stats-section");

let counterStarted = false;

function startCounters() {

  counters.forEach(counter => {

    const target =
      +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 120;

    function updateCounter() {

      count += (target - count) * 0.08;

      if (count < target) {

        counter.innerText =
          Math.floor(count).toLocaleString();

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText =
          target.toLocaleString();
      }
    }

    updateCounter();
  });
}

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (
        entry.isIntersecting &&
        !counterStarted
      ) {

        startCounters();

        counterStarted = true;
      }
    });
  },

  {
    threshold: 0.4
  }
);


observer.observe(statsSection);

// Advisory Board Carousel

const slides = document.querySelectorAll(".advisor-slide");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let current = 0;

function updateCarousel() {

  slides.forEach(slide => {

    slide.classList.remove(
      "active",
      "prev",
      "next"
    );

  });

  slides[current].classList.add("active");

  const prev =
    (current - 1 + slides.length)
    % slides.length;

  const next =
    (current + 1)
    % slides.length;

  slides[prev].classList.add("prev");

  slides[next].classList.add("next");
}

nextBtn.addEventListener("click", () => {

  current =
    (current + 1)
    % slides.length;

  updateCarousel();

});

prevBtn.addEventListener("click", () => {

  current =
    (current - 1 + slides.length)
    % slides.length;

  updateCarousel();

});

updateCarousel();


//Scroll to top button

const scrollTopBtn =
  document.getElementById("scrollTopBtn");


window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    scrollTopBtn.classList.add("show");

  } else {

    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"
  });
});