import "./style.css";
import "./variables.css";

const hamburguer = document.querySelector("#hamburguer");
const mobileMenu = document.querySelector("#mobile-menu");
const esc = document.querySelector("#esc");

esc?.addEventListener("click", () => {
  mobileMenu?.classList.add("hide");
  mobileMenu?.classList.remove("show");
});

hamburguer?.addEventListener("click", () => {
  mobileMenu?.classList.add("show");
  mobileMenu?.classList.remove("hide");
});

const slidesContainer = document.querySelector(".cards-wrapper");
const slide = document.querySelector(".card");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton?.addEventListener("click", () => {
  const slideWidth = slide?.clientWidth;
  if (slideWidth && slidesContainer) {
    slidesContainer.scrollLeft += slideWidth;
  }
});

prevButton?.addEventListener("click", () => {
  const slideWidth = slide?.clientWidth;
  if (slideWidth && slidesContainer) {
    slidesContainer.scrollLeft -= slideWidth;
  }
});

const testimonialsContainer = document.querySelector(".cards-testimonials");
const testimonial = document.querySelector(".testimonial");
const prevButtonTestimonial = document.getElementById("slide-arrow-prev-test");
const nextButtonTestimonial = document.getElementById("slide-arrow-next-test");

nextButtonTestimonial?.addEventListener("click", () => {
  console.log("hi");
  const testimonialWidth = testimonial?.clientWidth;
  console.log(testimonial, testimonialWidth);
  if (testimonialWidth && testimonialsContainer) {
    testimonialsContainer.scrollLeft += testimonialWidth;
  }
});

prevButtonTestimonial?.addEventListener("click", () => {
  const testimonialWidth = testimonial?.clientWidth;
  if (testimonialWidth && testimonialsContainer) {
    testimonialsContainer.scrollLeft -= testimonialWidth;
  }
});

const newsletter = document.querySelector("input");
const arrowNewsletter = document.querySelector("#arrow-newsletter");

arrowNewsletter?.addEventListener("click", () => {
  if (newsletter) {
    if (!newsletter.value.includes("@")) {
      alert("Please include an '@' in the e-mail address.");
    }
  }
});
