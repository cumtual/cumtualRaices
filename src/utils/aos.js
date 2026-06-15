import AOS from "aos";

export function myAosInit() {
  AOS.init({
    duration: 800,
    easing: "ease-out-quad",
    once: true,
    offset: 50,
  });
}