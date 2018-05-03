const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args) => {	

  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
  .setColor(0xD4AF37);
  if(message.author.id !== '267744059865432064') return message.channel.send(embed);

  if(!args[0]) return message.channel.send('You didn\'t specify a command...');

    delete require.cache[require.resolve(`./${args[0]}.js`)];
  let Aembed = new Discord.RichEmbed()
  .setTitle("Reloading..")
  .setDescription(`${args[0]}.js reloaded with succes!`)
  .setColor(0xD4AF37);

    return message.channel.send(Aembed);
}; 

module.exports.help = {
name: "reload"
}