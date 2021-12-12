window.addEventListener("scroll", () => {
  const content1 = document.querySelector(".content1");
  const paraf = document.querySelector(".content1 p");

  const position = content1.getBoundingClientRect().bottom;
  const screen = window.innerHeight;
  if (position < screen) {
    paraf.classList.add("animate");
  } else {
    paraf.classList.remove("animate");
  }
});
