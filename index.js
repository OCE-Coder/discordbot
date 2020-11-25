const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();




const PREFIX = (config.prefix);

var verison = '1.0.4';






//Commands Start

bot.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'ping':
      message.reply('Pong!');
    break;
  }
})

bot.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'ping2':
        message.channel.send('Pong!')
      break;
    case 'invite':
        message.channel.send('https://discord.gg/A8EGYSE')
        break;
    case 'info':
        if(args[1] === 'version'){
          message.channel.send("Version" + ' ' + verison);
        }else{
          message.channel.send('Invalid Command')
        }
      break;
  }
})

//Commands End

bot.on('ready', () =>{
  console.log('Loaded 7461/7461 Files, 0 Errors Found.');
  console.log('Bot Online');
})

bot.on('message', msg=>{
  if(msg.content === "fuck you"){
    msg.reply('Watch your language. ');
  }
})



bot.on('message', msg=>{
  if(msg.content === "Chilli help"){
    msg.reply('If you need help because of another user on the server go to #reports if its something else then go to support-ticket and a staff member will be with you shortly. ');
  }
})

bot.login(config.token);
