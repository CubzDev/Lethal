const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  
   message.guild.channels.get('426481076894957571').createInvite().then(invite =>  
    message.author.send(invite.url));
}

module.exports.help = {
  name: "invite"
}