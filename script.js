

const amountSlider = document.getElementById("loanAmount");
const monthSlider = document.getElementById("loanMonths");

const amountText = document.getElementById("amountText");
const monthText = document.getElementById("monthText");
const paymentText = document.getElementById("monthlyPayment");

// UPDATE VALUES
function updateLoan() {

  const amount = parseInt(amountSlider.value);
  const months = parseInt(monthSlider.value);

  amountText.innerText =
    "TSh " + amount.toLocaleString();

  monthText.innerText =
    "Miezi " + months;

  // Simple interest calculation
  const interest = 0.14;

  const total =
    amount + (amount * interest);

  const monthly =
    total / months;

  paymentText.innerText =
    "TSh " + Math.round(monthly).toLocaleString();
}

amountSlider.addEventListener("input", updateLoan);
monthSlider.addEventListener("input", updateLoan);

updateLoan();

// OPEN FORM
function openForm() {

  document.querySelector(".container").style.display = "none";

  document.getElementById("formPage").style.display = "block";
}

// FORM SUBMIT
document.getElementById("loanForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  <script>
document.getElementById("loanForm").addEventListener("submit", function(e) {

    e.preventDefault();

    window.location.href = "login.html";

});
</script>
