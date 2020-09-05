const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () =>{
    bot.user.setStatus("dnd");
    console.log("coneccter");
    setTimeout(() =>{
        bot.user.setActivity("https://site-de-la-team-akxx.glitch.me/");
    
    }, 100);
});

bot.login("NjU2MjUxNjU4ODQ5ODc4MDc3.Xff7_A.0PKXENLExA14GhNuBmHIg29dqgk");
