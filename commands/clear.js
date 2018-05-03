const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let msg = message.content.toUpperCase();

  if(!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.reply("You don't have the permissions to do this command!");
  if(!args[0]) return message.channel.send("Please specify a number.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(m => m.delete());
  
});

}

module.exports.help = {
  name: "clear"
}