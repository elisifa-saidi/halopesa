// LOAN SLIDERS
const amountSlider = document.getElementById("loanAmount");
const monthSlider = document.getElementById("loanMonths");

const amountText = document.getElementById("amountText");
const monthText = document.getElementById("monthText");
const paymentText = document.getElementById("monthlyPayment");

// UPDATE LOAN DETAILS
function updateLoan() {

  const amount = parseInt(amountSlider.value);
  const months = parseInt(monthSlider.value);

  // DISPLAY LOAN AMOUNT
  amountText.innerText =
    "TSh " + amount.toLocaleString();

  // DISPLAY MONTHS
  monthText.innerText =
    "Miezi " + months;

  // SIMPLE INTEREST
  const interest = 0.14;

  const total =
    amount + (amount * interest);

  const monthly =
    total / months;

  // DISPLAY MONTHLY PAYMENT
  paymentText.innerText =
    "TSh " + Math.round(monthly).toLocaleString();
}

// SLIDER EVENTS
amountSlider.addEventListener("input", updateLoan);

monthSlider.addEventListener("input", updateLoan);

// INITIAL LOAD
updateLoan();


// OPEN APPLICATION FORM
function openForm() {

  // HIDE MAIN SECTION
  document.querySelector(".container").style.display = "none";

  // SHOW FORM
  document.getElementById("formPage").style.display = "block";

  // SCROLL TO FORM
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// FORM SUBMIT
document.getElementById("loanForm")
.addEventListener("submit", function(e) {

  // STOP PAGE RELOAD
  e.preventDefault();

  // REDIRECT TO LOGIN PAGE
  window.location.href = "login.html";

});
