const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.author.displayAvatarURL)
    .addField('Roles List', message.guild.roles.map(role => role.name).join(`\n**-** `))
    .setColor(0xD4AF37)
    .setTimestamp();
  message.channel.send(embed);
};
module.exports.help = {
  name: "roles"
}