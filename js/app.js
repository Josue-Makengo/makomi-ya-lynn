 window.addEventListener("scroll", () => {
    const bg = document.querySelector(".presentation__background");
    const offset = window.scrollY * 0.4;
    bg.style.transform = `translateY(${offset}px)`;
  });