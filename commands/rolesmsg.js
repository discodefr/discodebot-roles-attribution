const Discord = require('discord.js');
const emojiCharacters = require('../emojiCharacters');
const ownersids = ["487698548935360513", "376812375795302402", "426486187285282857", "214465714461868033", "305043641611583488", "231757584032464896"]

exports.run = (client, message, args) => {

    if (!ownersids.includes(message.author.id)) return;

    //emojis
    var girorougeem = message.guild.emojis.find(em => em.id === "521399571188809728")
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
    var phpem = message.guild.emojis.find(em => em.id === "521398414328463365")
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
        .addField("Vos pratiques", ":video_game: • <@&482551543338500137>\n\n:open_file_folder: • <@&482464432039919626>\n\n:desktop: • <@&503872954593968128>\n\n:pencil2: • <@&482468587005542401>\n\n:saxophone: • <@&482474709729148938>\n", true)
        .addField("Notifications", ":one: • <@&482571748794171392>\n\n:two: • <@&482571876133109761>\n\n:three: • <@&482571969158447105>\n\n:four: • <@&482572024896684042>\n\n:five: • <@&498055718457573378>\n", true)
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
                                                    .addField("Rôles développeurs", djsem + " • <@&482522792152268811>\n\n" + pyem + " • <@&482517526220242954>\n\n" + htmlem + " • <@&482526265966854145>\n\n" + cssem + " • <@&482526332350234645>\n\n" + jsem + " • <@&482517589298511891>\n\n" + lcem + " • <@&482518807965990912>\n\n" + cppem + " • <@&482530444659785758>\n", true)
                                                    .addField("_ _", csem + " • <@&482530510065631253>\n\n" + goem + " • <@&482530768833478656>\n\n" + bashem + " • <@&482531108043358208>\n\n" + rubyem + " • <@&482530845693968384>\n\n" + javaem + " • <@&482530959267201054>\n\n" + phpem + " • <@&482531325786587147>\n\n" + luaem + " • <@&521375041242529792>", true)
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
                                                                                                                .addField("Rôles gameurs", bdoem + " • <@&516975473780195336>\n\n" + codem + " • <@&516975472110993410>\n\n" + owem + " • <@&516975473776001044>\n\n" + desem + " • <@&516975471075000360>\n\n" + ftnem + " • <@&516976808264990779>\n\n" + spltem + " • <@&516975470731067392>\n\n" + csgoem + " • <@&518169169519181831>", true)
                                                                                                                .addField("_ _", rblem + " • <@&516975472471441440>\n\n" + forzaem + " • <@&518169168965795840>\n\n" + falloutem + " • <@&518169191489208323>\n\n" + mcem + " • <@&518169380597661743>\n\n" + pldem + " • <@&518742072497537034>", true)
                                                                                                                .setTimestamp(new Date)
                                                                                                                .setFooter("DisCode®", client.user.avatarURL)
                                                                                                            message.channel.send(rolesembed2).then(rolesembed2 => {
                                                                                                                rolesembed2.react(bdoem).then(() => {
                                                                                                                    rolesembed2.react(codem).then(() => {
                                                                                                                        rolesembed2.react(owem).then(() => {
                                                                                                                            rolesembed2.react(desem).then(() => {
                                                                                                                                rolesembed2.react(ftnem).then(() => {
                                                                                                                                    rolesembed2.react(spltem).then(()=> {
                                                                                                                                        rolesembed2.react(csgoem).then(() => {
                                                                                                                                            rolesembed2.react(rblem).then(() => {
                                                                                                                                                rolesembed2.react(forzaem).then(() => {
                                                                                                                                                    rolesembed2.react(falloutem).then(() => {
                                                                                                                                                        rolesembed2.react(mcem).then(() => {
                                                                                                                                                            rolesembed2.react(pldem).then(()=> {
                                                                                                                                                                message.channel.send("_ _\n" + girorougeem + " **Pour rappel, plusieurs messages-rôles sont disponibles.** " + girorougeem + "\n\n1 • Les rôles concernant votre **pratique**, les **notifications**.\n2 • Les rôles de **langages de programmation** pour les **développeurs**.\n3 • Les rôles **jeux-vidéos** pour les **gameurs**.")
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