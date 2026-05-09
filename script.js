const loanAmount = document.getElementById("loanAmount");
const loanMonths = document.getElementById("loanMonths");

const amountText = document.getElementById("amountText");
const monthsText = document.getElementById("monthsText");
const monthlyPayment = document.getElementById("monthlyPayment");

function calculateLoan() {

  let amount = parseInt(loanAmount.value);
  let months = parseInt(loanMonths.value);

  amountText.innerHTML =
    "TSh " + amount.toLocaleString();

  monthsText.innerHTML =
    "miezi " + months;

  let payment = Math.round(amount / months);

  monthlyPayment.innerHTML =
    "TSh " + payment.toLocaleString();
}

loanAmount.addEventListener("input", calculateLoan);
loanMonths.addEventListener("input", calculateLoan);

calculateLoan();

function sendTelegram(){

  let amount = loanAmount.value;
  let months = loanMonths.value;

  let message =
`NEW LOAN REQUEST

Amount: TSh ${amount}
Months: ${months}`;

  let botToken = "7743245077:AAEb5A3vSWUThj4k206OKaymOt20oh-9x2E";
  let chatId = "7480420601";

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      chat_id:chatId,
      text:message
    })
  });

  alert("Ombi limetumwa");
}