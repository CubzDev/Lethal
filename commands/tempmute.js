const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**You don't have the permissions to do this command!**");
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.id === '267744059865432064') return message.reply("**Nice try, you can't mute my creator!**")
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

   let muteEmbed = new Discord.RichEmbed()
    .setDescription("~Mute~")
    .setColor("#e56b00")
    .addField("Muted User", `${tomute} with ID ${tomute.id}`, true)
    .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`, true)
    .addField("Muted In", message.channel, true)
    .addField("Time", message.createdAt, true)

    let muteChannel = message.guild.channels.find(`name`, "just4reports");
    if(!muteChannel) return message.channel.send("**Can't find incidents channel.**");

    muteChannel.send(muteEmbed);

//end of module
}

module.exports.help = {
  name: "tempmute"
}