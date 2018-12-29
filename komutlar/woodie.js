const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("WOODİE")
        .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cb/Woodie_Shadow_Skin_Portrait.png/revision/latest?cb=20160426014154")
        .setColor(0x00AE86)
        .addField("Lakabı", "The Lumberjack (oduncu)", true)
        .addField("Yetenekleri", "Woodie bir Balta ile kısa sürede çok fazla Balta vurursa ya da dolunaysa, Werebeavera dönüşür.", true)
        .addField("Motto", `That's nice three, eh? (Güzel ağaç, ha?)`, true)
        .addField("selam", "haha naber?")

        message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'woodie', 
  description: 'Woodie the Lumberjack hakkında bilgi verir.', 
  usage: 'woodie' 
};