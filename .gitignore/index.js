const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () =>{
    bot.user.setStatus("dnd");
    console.log("coneccter");
    setTimeout(() =>{
        bot.user.setActivity(process.env.DEC);
    
    }, 100);
});

bot.login(process.env.TOKEN);
