const ratingContainer = document.querySelector(".ratingcontainer")
const thankYouContainer = document.querySelector(".thankyoucontainer")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    ratingContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});