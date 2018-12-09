const Discord = require('discord.js');
const emojiCharacters = require('../emojiCharacters');
const ownersids = ["296281924773740554", "272676235946098688", "376812375795302402", "305043641611583488", "329669021043523594"]

exports.run = (client, message, args) => {

    if (!ownersids.includes(message.author.id)) return;

    //emojis
    var othersem = message.guild.emojis.find(em => em.id === "482579389335339009")
    var djsem = message.guild.emojis.find(em => em.id === "482460553256894477")
    var pyem = message.guild.emojis.find(em => em.id === "482461186210660372")
    var htmlem = message.guild.emojis.find(em => em.id === "482526069501460490")
    var cssem = message.guild.emojis.find(em => em.id === "482526005127282688")
    var jsem = message.guild.emojis.find(em => em.id === "482461015158816768")
    var lcem = message.guild.emojis.find(em => em.id === "482464112719167508")
    var cppem = message.guild.emojis.find(em => em.id === "482535940493934592")
    var csem = message.guild.emojis.find(em => em.id === "482536212595474432")
    var goem = message.guild.emojis.find(em => em.id === "482538495609536522")
    var bashem = message.guild.emojis.find(em => em.id === "482540545156186112")
    var rubyem = message.guild.emojis.find(em => em.id === "482535746788524043")
    var javaem = message.guild.emojis.find(em => em.id === "482538218378756106")
    var phpem = message.guild.emojis.find(em => em.id === "482533506996764682")
    var luaem = message.guild.emojis.find(em => em.id === "521324768910376961")

    var bdoem = message.guild.emojis.find(em => em.id === "516981489397923860")
    var codem = message.guild.emojis.find(em => em.id === "520678312591360011")
    var owem = message.guild.emojis.find(em => em.id === "520679378728779777")
    var desem = message.guild.emojis.find(em => em.id === "520678901111062598")
    var ftnem = message.guild.emojis.find(em => em.id === "520679986261131267")
    var spltem = message.guild.emojis.find(em => em.id === "520682162203131904")
    var rblem = message.guild.emojis.find(em => em.id === "516974966193913867")
    var csgoem = message.guild.emojis.find(em => em.id === "518168702844403712")
    var forzaem = message.guild.emojis.find(em => em.id === "518168605041491978")
    var falloutem = message.guild.emojis.find(em => em.id === "518169007682093066")
    var mcem = message.guild.emojis.find(em => em.id === "518168646565232667")
    var pldem = message.guild.emojis.find(em => em.id === "518742033410686977")

    //channel
    var roleschnl = message.guild.channels.find(chnl => chnl.id === "482457200984326154"); 

    var rolesembed = new Discord.RichEmbed()
        .setColor("186BBE")
        .setAuthor("DisCode®", message.guild.iconURL)
        .addField("Vos pratiques", ":video_game: : Gameur\n\n:open_file_folder: : Développeur\n\n:desktop: : Informaticien\n\n:pencil2: : Graphiste\n\n:saxophone: : Musicien\n", true)
        .addField("Notifications", ":one: : Notif ANNONCES\n\n:two: : Notif PARTENARIATS\n\n:three: : Notif EVENTS\n\n:four: : Notif UPDATES\n\n:five: : Notif SONDAGES\n", true)
        .addField("_ _", "_ _")
        .addField("\n\n" + othersem + " HypeSquad et Nitro", "Veuillez contacter un administrateur pour avoir accès aux rôles HypeSquad et Nitro.")
        .setTimestamp(new Date)
        .setFooter("DisCode®", client.user.avatarURL)
    message.channel.send(rolesembed).then(rolesembed => {
        rolesembed.react("🎮").then(() => {
            rolesembed.react("📂").then(() => {
                rolesembed.react("🖥").then(() => {
                    rolesembed.react("✏").then(() => {
                        rolesembed.react("🎷").then(() => {
                            rolesembed.react(emojiCharacters[1]).then(() => {
                                rolesembed.react(emojiCharacters[2]).then(() => {
                                    rolesembed.react(emojiCharacters[3]).then(() => {
                                        rolesembed.react(emojiCharacters[4]).then(() => {
                                            rolesembed.react(emojiCharacters[5]).then(() => {
                                                var rolesembed1 = new Discord.RichEmbed()
                                                    .setColor("186BBE")
                                                    .setAuthor("DisCode®", message.guild.iconURL)
                                                    .addField("Rôles développeurs", djsem + " : Discord.js\n\n" + pyem + " : Python\n\n" + htmlem + " : HTML\n\n" + cssem + " : CSS\n\n" + jsem + " : JavaScript\n\n" + lcem + " : Langage C\n\n" + cppem + " : C++\n", true)
                                                    .addField("_ _", csem + " : C#\n\n" + goem + " : Go\n\n" + bashem + " : Bash\n\n" + rubyem + " : Ruby\n\n" + javaem + " : Java\n\n" + phpem + " : PhP\n\n" + luaem + " : Lua", true)
                                                    .setTimestamp(new Date)
                                                    .setFooter("DisCode®", client.user.avatarURL)
                                                message.channel.send(rolesembed1).then(rolesembed1 => {
                                                    rolesembed1.react(djsem).then(() => {
                                                        rolesembed1.react(pyem).then(() => {
                                                            rolesembed1.react(htmlem).then(() => {
                                                                rolesembed1.react(cssem).then(() => {
                                                                    rolesembed1.react(jsem).then(() => {
                                                                        rolesembed1.react(lcem).then(() => {
                                                                            rolesembed1.react(cppem).then(() => {
                                                                                rolesembed1.react(csem).then(() => {
                                                                                    rolesembed1.react(goem).then(() => {
                                                                                        rolesembed1.react(bashem).then(() => {
                                                                                            rolesembed1.react(rubyem).then(() => {
                                                                                                rolesembed1.react(javaem).then(() => {
                                                                                                    rolesembed1.react(phpem).then(() => {
                                                                                                        rolesembed1.react(luaem).then(() => {
                                                                                                            var rolesembed2 = new Discord.RichEmbed()
                                                                                                                .setColor("186BBE")
                                                                                                                .setAuthor("DisCode®", message.guild.iconURL)
                                                                                                                .addField("Rôles gameurs", bdoem + " : Black Desert Online\n\n" + codem + " : Call of Duty 4\n\n" + owem + " : Overwatch\n\n" + desem + " : Destiny 2\n\n" + ftnem + " : Fortnite\n\n" + spltem + " : Splatoon\n\n" + csgoem + " : CS:GO", true)
                                                                                                                .addField("_ _", rblem + " : Roblox\n\n" + csem + " : CS:GO\n\n" + forzaem + " : Forza\n\n" + falloutem + " : Fallout\n\n" + mcem + " : Minecraft\n\n" + pldem + " : Paladins", true)
                                                                                                                .setTimestamp(new Date)
                                                                                                                .setFooter("DisCode®", client.user.avatarURL)
                                                                                                            message.channel.send(rolesembed2).then(rolesembed2 => {
                                                                                                                rolesembed2.react(bdoem).then(() => {
                                                                                                                    rolesembed2.react(codem).then(() => {
                                                                                                                        rolesembed2.react(owem).then(() => {
                                                                                                                            rolesembed2.react(desem).then(() => {
                                                                                                                                rolesembed2.react(ftnem).then(() => {
                                                                                                                                    rolesembed2.react(csgoem).then(()=> {
                                                                                                                                        rolesembed2.react(spltem).then(() => {
                                                                                                                                            rolesembed2.react(rblem).then(() => {
                                                                                                                                                rolesembed2.react(csem).then(() => {
                                                                                                                                                    rolesembed2.react(forzaem).then(() => {
                                                                                                                                                        rolesembed2.react(falloutem).then(() => {
                                                                                                                                                            rolesembed2.react(mcem).then(() => {
                                                                                                                                                                rolesembed2.react(pldem)
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

exports.help = {
    name: "rolesmsg"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}