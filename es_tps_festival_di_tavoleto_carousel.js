/* By Andrea Gennaioli */

window.onload = () => {
  startCarousel();
};

let carousel_offset = 0;
const slide_count = 4;
function startCarousel() {
  setInterval(() => {
    shiftCarousel();
  }, 10000);
}

document
  .getElementById("carousel-previus")
  .addEventListener("click", () => {
    unshiftCarousel();
  });

document.getElementById("carousel-next").addEventListener("click", () => {
  shiftCarousel();
});

function shiftCarousel() {
  if (carousel_offset == -1000 * (slide_count - 1)) {
    carousel_offset = 0;
  } else {
    carousel_offset -= 1000;
  }
  document.getElementById("first-slide").style[
    "margin-left"
  ] = `${carousel_offset}px`;

  updatePoints();
}

function unshiftCarousel() {
  if (carousel_offset == 0) {
    carousel_offset = -1000 * (slide_count - 1);
  } else {
    carousel_offset += 1000;
  }
  document.getElementById("first-slide").style[
    "margin-left"
  ] = `${carousel_offset}px`;

  updatePoints();
}

function updatePoints() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`point-${i}`).className = "point";
  }
  document.getElementById(
    `point-${Math.abs(carousel_offset / 1000)}`
  ).className += " active";
}
