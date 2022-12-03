const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.MTA0NDc2NzQ3MDA1MDg3NzQ3MA.GWbBOF.WaOo9KBP7g6PuibApx_1Ug_T1SVJeSISRsCrEk);//where BOT_TOKEN is the token of our bot
