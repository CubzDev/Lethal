const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (client, message, args) => {

      if (args[0] === 'doggy')  return message.channel.send(`:warning: **Can't send this, bad words detected. ** :warning:`);
      if (args[0] === 'jasper')  return message.channel.send(`:warning: **Can't send this, bad words detected. ** :warning:`);
      if (args[0] === 'pink')  return message.channel.send(`:warning: **Can't send this, bad words detected. ** :warning:`);

      if (args[0] === 'J4F' || args[0] === 'Just 4 Fun' || args[0] === 'j4f')  {
        let uEmbed = new Discord.RichEmbed()
         .setTitle('J4F')
         .setDescription('An awesome discord server for overwatch players.')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }
      if (args[0] === 'gamebeek')  {
        let uEmbed = new Discord.RichEmbed()
         .setTitle('gamebeek')
         .setDescription('Gamebeek is an official meetup hosted by the J4F team. \nMore information: https://is.gd/Gamebeek')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }
      if (args[0] === 'Cubz' || args[0] === 'cubz')  {
        let uEmbed = new Discord.RichEmbed()
         .setTitle('Cubz')
         .setDescription('My creator ^^')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }
      if (args[0] === 'Quadria' || args[0] === 'quadria') {
        let uEmbed = new Discord.RichEmbed()
         .setTitle('Quadria')
         .setDescription('CEO SarcMC Corporation in EVE Online.\nKnown to be a trillionair.\nAlso, Vampragon\'s dad (He\'s always watching you.)')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }
      if (args[0] === 'bot' || args[0] === 'Bot' ) {
      let uEmbed = new Discord.RichEmbed()
         .setTitle('Bot')
         .setDescription('Really... Why? \nI mean, look at me, does that need an explenation...')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }
      if (args[0] === 'FlyingWings') {
        let uEmbed = new Discord.RichEmbed()
         .setTitle('FlyingWings')
         .setDescription('This is defined as a girl who really, really likes to spam commands.')
         .setColor(0xD4AF37)
        message.channel.send(uEmbed);
        return;
      }


  let str = args.join(" ");
  if(args.length < 1) return message.reply("Please specify something to define.");
  
  urban(str).first(json => {
   if(!json) return message.reply("Sorry. No results found.")
  
    
    let uEmbed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setColor(0xD4AF37)
    .setDescription(json.definition || "None")

    message.channel.send(uEmbed);
  });

}


module.exports.help = {
  name: 'define'
}