const ratingEl = document.querySelectorAll(".rating");
const btnEl = document.querySelector("#btn");
const containerEl = document.querySelector("#main-container");

let selectedRating = "";

ratingEl.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();

    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

function removeActive() {
  ratingEl.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `<strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});
