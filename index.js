const Discord = require('discord.js');
const economy = require('discord-eco');
const moment = require('moment');
const parsems = require('parse-ms');
const fs = require('fs')
const ms = require('ms');

const client = new Discord.Client();
const modRole = 'Administrator';
const memberRole = 'Member';
const user = 'User';
const Ambassador = 'Ambassador';
const commands = 'Ambassador';
const dev = 'Developer';

client.commands = new Discord.Collection();

function loadCmds () {

  fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }

    jsfile.forEach((f, i) =>{
      delete require.cache[require.resolve(`./commands/${f}`)]
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      client.commands.set(props.help.name, props);
    });

  });
}

loadCmds();

client.on('ready', () => {
  client.user.setStatus('online')
  client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
});

client.on("message", async message => {

	let msg = message.content.toUpperCase();

	//let xp = JSON.parse(fs.readFileSync('./Storage/xp.json', 'utf8'));

	let prefix = "$";

	if(!message.content.startsWith(prefix)) return undefined;

	let messageArrey = message.content.split(" ");
	let cmd = messageArrey[0];
	let args = messageArrey.slice(1)

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client ,message, args)

});

  client.on('guildMemberAdd', member => {
    const Embed = new Discord.RichEmbed()
      .setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
      .setColor(0xD4AF37)
      .setDescription(`I'm sure you have a lot of questions. \nPlease take a look at the 'Information' category! Have a great time here!`)
      .addField('Users: ', `${member.guild.memberCount}`, true)
    client.channels.get('431026517472968705').send(Embed)
    client.channels.get('441149092828282880').setName(`Total Members: ${member.guild.memberCount}`)
});

  client.on('guildMemberRemove', member => {
    client.channels.get('441149092828282880').setName(`Total Members: ${member.guild.memberCount}`)
  });

client.login('NDI4ODM2ODE1NjE3Nzg1ODY2.DZ45Dg.qE9Qxx4Iv0eAm1l4HeL5iEPmKE8')