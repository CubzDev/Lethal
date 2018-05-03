const Discord = require("discord.js");
const weather = require('weather-js')
module.exports.run = async (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0xD4AF37)
    .addField('Timezone', `UTC ${location.timezone}`, true)
    .addField('Degree Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField('Winds', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send(embed)
});
  

}

module.exports.help = {
  name: "weather"
}