const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        let pEmbed = new Discord.RichEmbed()
        .setColor(0xD4AF37)
        .setTitle(':ping_pong: Pong!')
        .setDescription("Latency " + Date.now() - message.createdTimestamp + "\nms. Api Latency is " + Math.round(bot.ping) + "ms.")
        .addField('API Latency' , `${client.ping}`, false);
         message.channel.send(pEmbed);
}


module.exports.help = {
  name: "ping"
}