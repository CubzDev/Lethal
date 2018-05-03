const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You can't execute this command!**");
    if(args[0] == "help"){
      message.reply("**Usage: $kick [@user] [reason]**");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**Can't find user!**");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**That person can't be kicked!**");
    if(kUser.id === '267744059865432064') return message.channel.send("**That person can't be kicked!**");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`, true)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`, true)
    .addField("Kicked In", message.channel, true)
    .addField("Time", message.createdAt, true)
    .addField("Reason", kReason, true);

    let kickChannel = message.guild.channels.find(`name`, "just4reports");
    if(!incidentchannel) {
      message.channel.send("**Can't find incidents channel.**");
      server.createChannel(`name`, "just4reports");
      return;
    } 
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
name:"kick"
}