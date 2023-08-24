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

// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";

// // document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://www.typescriptlang.org/" target="_blank">
// //       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
// //     </a>
// //     <h1>Vite + TypeScript</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite and TypeScript logos to learn more
// //     </p>
// //   </div>
// // `;

// // setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
