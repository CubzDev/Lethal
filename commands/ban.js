const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You can't execute this command!**");
    if(args[0] == "help"){
      message.reply("Usage: $ban [@user] [reason]");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**Can't find user!**");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**That person can't be banned!**");
    if(bUser.id === '267744059865432064') return message.channel.send("**That person can't be banned!**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`, true)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`, true)
    .addField("Banned In", message.channel, true)
    .addField("Time", message.createdAt, true)
    .addField("Reason", bReason, true);

    let kickChannel = message.guild.channels.find(`name`, "just4reports");
    if(!incidentchannel) {
      message.channel.send("**Can't find incidents channel.**");
      server.createChannel(`name`, "just4incidents");
      return;
    } 

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}