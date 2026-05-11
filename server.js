const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 🔐 WEKA TOKEN YAKO HAPA
const BOT_TOKEN = "7743245077:AAEb5A3vSWUThj4k206OKaymOt20oh-9x2E";
const CHAT_ID = "7480420601";

// SEND TO TELEGRAM
async function sendToTelegram(data) {

  const message = `
📩 *NEW APPLICATION*

📞 Namba: ${data.phone}
📅 Tarehe: ${data.date}
📊 Hali: Pending review
`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ APPROVE", callback_data: "approve" },
          { text: "❌ REJECT", callback_data: "reject" }
        ],
        [
          { text: "📄 VIEW APPLICATION", callback_data: "view" }
        ]
      ]
    }
  });
}

// API FROM FRONTEND
app.post("/application", async (req, res) => {

  const { phone } = req.body;

  const data = {
    phone: phone,
    date: new Date().toLocaleString()
  };

  await sendToTelegram(data);

  res.json({ status: "sent" });
});

app.listen(3000, () => {
  console.log("Server running...");
});
