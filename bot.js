const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595146627585540099")
setInterval(function() {
channel.send(`zeref zeref zeref zeref zeref`);
}, 30)
})

client.login(process.env.BOT_TOKEN);