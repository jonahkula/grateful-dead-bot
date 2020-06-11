const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let helpMessage = [
  '\n!about: gives link to main info page on Grateful Dead',
  '!site: gives link to main Grateful Dead website',
  '![1965-1995]: gives link to concerts in that year'
].join('\n');

links = {
  about: { url: "https://en.wikipedia.org/wiki/Grateful_Dead" },
  site: { url: "https://www.dead.net/" },
  1965: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221965%22" },
  1966: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221966%22" },
  1967: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221967%22" },
  1968: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221968%22" },
  1969: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221969%22" },
  1970: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221970%22" },
  1971: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221971%22" },
  1972: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221972%22" },
  1973: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221973%22" },
  1974: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221974%22" },
  1975: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221975%22" },
  1976: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221976%22" },
  1977: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221977%22" },
  1978: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221978%22" },
  1979: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221979%22" },
  1980: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221980%22" },
  1981: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221981%22" },
  1982: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221982%22" },
  1983: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221983%22" },
  1984: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221984%22" },
  1985: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221985%22" },
  1986: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221986%22" },
  1987: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221987%22" },
  1988: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221988%22" },
  1989: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221989%22" },
  1990: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221990%22" },
  1991: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221991%22" },
  1992: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221992%22" },
  1993: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221993%22" },
  1994: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221994%22" },
  1995: { url: "https://archive.org/details/GratefulDead?&and[]=year%3A%221995%22" }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith("!")) {
    let command = msg.content.slice(1, msg.content.length);
    if (command == "help")
      msg.reply(helpMessage);
    else
      msg.reply(command + ": " + links[command].url)
  }
});

let rawCreds = fs.readFileSync('creds.json');
let token = JSON.parse(rawCreds).discordToken;
client.login(token);
