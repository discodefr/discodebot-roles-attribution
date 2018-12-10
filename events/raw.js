const messagesids = ["521427827741163521", "521427847542210580", "521427871353405443"]
const Discord = require('discord.js')
const emojiCharacter = require('../emojiCharacters.js')

exports.run = async (client, event) => {

    if(event.t === "MESSAGE_REACTION_ADD") {

        const { d: data } = event;
        const emoji = data.emoji;
        const guild = client.guilds.find(gl => gl.id === data.guild_id)
        const member = guild.members.find(mb => mb.id === data.user_id)
        if(!messagesids.includes(data.message_id)) return;

        // 1er embed
        if(emoji.name === "🎮") {

            member.addRole('482551543338500137')

        } else if(emoji.name === "📂") {

            member.addRole('482464432039919626')

        } else if(emoji.name === "🖥") {
            member.addRole('503872954593968128')
        } else if(emoji.name === "✏") {
            member.addRole('482468587005542401')
        } else if(emoji.name === "🎷") {
            member.addRole("482474709729148938")
        } else if(emoji.name === emojiCharacter[1]) {
            member.addRole('482571748794171392')
        } else if(emoji.name === emojiCharacter[2]) {
            member.addRole('482571876133109761')
        } else if(emoji.name === emojiCharacter[3]) {
            member.addRole('482571969158447105')
        } else if(emoji.name === emojiCharacter[4]) {
            member.addRole('482572024896684042')
        } else if(emoji.name === emojiCharacter[5]) {
            member.addRole('498055718457573378')
            // Permier embed fin
            //début deuxième embed
        } else if(emoji.id === "482460553256894477") { // Discord.js
            member.addRole('482522792152268811')
        } else if(emoji.id === '482461186210660372') { // Python
            member.addRole('482517526220242954')
        } else if(emoji.id === "482526069501460490") { // HTML
            member.addRole('482526265966854145')
        } else if(emoji.id === "482526005127282688") { // CSS
            member.addRole('482526332350234645')
        } else if(emoji.id === "482461015158816768") { // JS
            member.addRole('482517589298511891')
        } else if(emoji.id === "482464112719167508") { // Langage C
            member.addRole('482518807965990912')
        } else if(emoji.id === "482535940493934592") { // C++
            member.addRole('482530444659785758')
        } else if(emoji.id === "482536212595474432") { // C#
            member.addRole('482530510065631253')
        } else if(emoji.id === "482538495609536522") { // Go
            member.addRole('482530768833478656')
        } else if(emoji.id === "482540545156186112") { // Bash
            member.addRole('482531108043358208')
        } else if(emoji.id === "482535746788524043") { // Ruby
            member.addRole('482530845693968384')
        } else if(emoji.id === "482538218378756106") { // Java
            member.addRole('482530959267201054')
        } else if(emoji.id === "521398414328463365") { // PhP
            member.addRole('482531325786587147')
        } else if(emoji.id === "521324768910376961") { // Lua
            member.addRole('521375041242529792')
            // Fin deuxième embed
            // Début troisième embed
        } else if(emoji.id === "516981489397923860") { // BDO
            member.addRole('516975473780195336')
        } else if(emoji.id === "520678312591360011") { // BO4
            member.addRole('516975472110993410')
        } else if(emoji.id === "520679378728779777") { // OverWatch
            member.addRole('516975473776001044')
        } else if(emoji.id === "520678901111062598") { // Destiny 2
            member.addRole('516975471075000360')
        } else if(emoji.id === "520679986261131267") { // Fortnite
            member.addRole('516976808264990779')
        } else if(emoji.id === '520682162203131904') { // Splatoon 2
            member.addRole('516975470731067392')
        } else if(emoji.id === "518168702844403712") { // CS:GO
            member.addRole('518169169519181831')
        } else if(emoji.id === "516974966193913867") { // Roblox
            member.addRole('516975472471441440')
        } else if(emoji.id === "518168605041491978") { // Forza
            member.addRole('518169168965795840')
        } else if(emoji.id === "518169007682093066") { // Fallout
            member.addRole('518169191489208323')
        } else if(emoji.id === "518168646565232667") { // Minecraft
            member.addRole('518169380597661743')
        } else if(emoji.id === "518742033410686977") { // Paladins
            member.addRole('518742072497537034')
        }

    } else if(event.t === "MESSAGE_REACTION_REMOVE") {

        const { d: data } = event;
        const emoji = data.emoji;
        const guild = client.guilds.find(gl => gl.id === data.guild_id)
        const member = guild.members.find(mb => mb.id === data.user_id)
        if(!messagesids.includes(data.message_id)) return;
        // 1er embed
        if(emoji.name === "🎮") {

            member.removeRole('482551543338500137')

        } else if(emoji.name === "📂") {

            member.removeRole('482464432039919626')

        } else if(emoji.name === "🖥") {
            member.removeRole('503872954593968128')
        } else if(emoji.name === "✏") {
            member.removeRole('482468587005542401')
        } else if(emoji.name === "🎷") {
            member.removeRole("482474709729148938")
        } else if(emoji.name === emojiCharacter[1]) {
            member.removeRole('482571748794171392')
        } else if(emoji.name === emojiCharacter[2]) {
            member.removeRole('482571876133109761')
        } else if(emoji.name === emojiCharacter[3]) {
            member.removeRole('482571969158447105')
        } else if(emoji.name === emojiCharacter[4]) {
            member.removeRole('482572024896684042')
        } else if(emoji.name === emojiCharacter[5]) {
            member.removeRole('498055718457573378')
            // Permier embed fin
            //début deuxième embed
        } else if(emoji.id === "482460553256894477") { // Discord.js
            member.removeRole('482522792152268811')
        } else if(emoji.id === '482461186210660372') { // Python
            member.removeRole('482517526220242954')
        } else if(emoji.id === "482526069501460490") { // HTML
            member.removeRole('482526265966854145')
        } else if(emoji.id === "482526005127282688") { // CSS
            member.removeRole('482526332350234645')
        } else if(emoji.id === "482461015158816768") { // JS
            member.removeRole('482517589298511891')
        } else if(emoji.id === "482464112719167508") { // Langage C
            member.removeRole('482518807965990912')
        } else if(emoji.id === "482535940493934592") { // C++
            member.removeRole('482530444659785758')
        } else if(emoji.id === "482536212595474432") { // C#
            member.removeRole('482530510065631253')
        } else if(emoji.id === "482538495609536522") { // Go
            member.removeRole('482530768833478656')
        } else if(emoji.id === "482540545156186112") { // Bash
            member.removeRole('482531108043358208')
        } else if(emoji.id === "482535746788524043") { // Ruby
            member.removeRole('482530845693968384')
        } else if(emoji.id === "482538218378756106") { // Java
            member.removeRole('482530959267201054')
        } else if(emoji.id === "521398414328463365") { // PhP
            member.removeRole('482531325786587147')
        } else if(emoji.id === "521324768910376961") { // Lua
            member.removeRole('521375041242529792')
            // Fin deuxième embed
            // Début troisième embed
        } else if(emoji.id === "516981489397923860") { // BDO
            member.removeRole('516975473780195336')
        } else if(emoji.id === "520678312591360011") { // BO4
            member.removeRole('516975472110993410')
        } else if(emoji.id === "520679378728779777") { // OverWatch
            member.removeRole('516975473776001044')
        } else if(emoji.id === "520678901111062598") { // Destiny 2
            member.removeRole('516975471075000360')
        } else if(emoji.id === "520679986261131267") { // Fortnite
            member.removeRole('516976808264990779')
        } else if(emoji.id === '520682162203131904') { // Splatoon 2
            member.removeRole('516975470731067392')
        } else if(emoji.id === "518168702844403712") { // CS:GO
            member.removeRole('518169169519181831')
        } else if(emoji.id === "516974966193913867") { // Roblox
            member.removeRole('516975472471441440')
        } else if(emoji.id === "518168605041491978") { // Forza
            member.removeRole('518169168965795840')
        } else if(emoji.id === "518169007682093066") { // Fallout
            member.removeRole('518169191489208323')
        } else if(emoji.id === "518168646565232667") { // Minecraft
            member.removeRole('518169380597661743')
        } else if(emoji.id === "518742033410686977") { // Paladins
            member.removeRole('518742072497537034')
        }
    }

}