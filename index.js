require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = "ODAxOTUyNDc5OTY1MjE2ODAw.YAoKcg.tgfsPZ9oyLEdDkp-AwUVIaBdDlw";

bot.login(TOKEN);
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith("!warning")) {
    var server = msg.guild.id;
    const rol = msg.guild.roles.find(role => role.name == 'warning')
    const person = msg.mentions.users.first();
    const member = msg.mentions.members.first();
    msg.channel.send("no te hagas el boludo te estoy viendo: " + person);
    member.addRole(rol.id).catch(e => console.error(e));
  }
  if (msg.content.startsWith("!sacar")) {
    msg.channel.send("Dejasela adentro");
  }
  if (msg.content.startsWith("!Cyborg")) {
    msg.channel.send("Cybord: Special  \n ST:7 \n PE:10(+2) \n EN:10 \n AG:10(+10) \n Traits: Fast Meta,One Hander \n Perk: 3-Faster Healing \n 6-Toughness \n 9-Toughness \n 12-LifeGiver  \n 15-LifeGiver \n 18-BRD \n 21-BROF \n 24-MBRD \n IMP: MEMEAN x3 Claw x3 Phonix x3 Dermal x1")
  }
  if (msg.content.startsWith("!Priest")) {
    let PristBuild = "";
    PristBuild += "Priest tanque: \n"
    PristBuild += "St6  - Pe9 (+1 implante) - En10(+2 gain endurance) -  Ch1 - In3 (+ class perk priest +3) - Ag10 (+5 reflex) - Lk 1 \n"
    PristBuild += "Traits: fast metabolism - one hander \n"
    PristBuild += "Perks: gain endurance (primer perk), life giver x2, toughness x2, adrenaline rush, bonus rate of fire, faster healing. \n"
    PristBuild += "Implantes de combate: 2 nemean - 2 phoenix - 1 dermal \n"
    PristBuild += "Drogas: Psycho, beer, nuka, healing powder, booze. \n"
    PristBuild += "Armas: Smg plasma - P90 - Granadas \n"
    msg.channel.send(PristBuild);
  }
  if (msg.content.startsWith("!Garra")) {
    let Garra = "";
    Garra += "Garra Daño: \n"
    Garra += "St10(+4Imp + +3Class) - Pe3 - En10 -  Ch1 - In6 - Ag4 - Lk 10(+2 Imp) \n"
    Garra += "Traits: Cannibal - Bruiser \n"
    Garra += "Perks:Bonus HtH Damage,  More HtH Critical , Even More Critical, Better HtH Critical, Silen Runnig, Bonus HtH Attack, SprayAndPrey, RBE. \n"
    Garra += "Implantes de combate: 2 Tiger - 2 Agresor - 1 Dragon \n"
    Garra += "Drogas: Todas Las Droga Canibal.\n"
    Garra += "Armas: Lanza or Pequeño Jesus or Porra Electrica  - Motion  \n"
    msg.channel.send(Garra);
  }

});