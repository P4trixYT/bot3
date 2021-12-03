const Discord = require('discord.js');
const { token, prefix } = require('./config.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});;
const fs = require('fs');
const enmap = require('enmap');
require('discord-buttons')(client);

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));

// PRZYCISK DO WERYFIKACJI
client.on('clickButton', async (button, message) => {
//PRZYCISK DO STWORZENIA TICKETOW
    if(button.id == 'tic1') {
    button.reply.send('<a:Verify:900403484120195102>  Ticket został stworzony, Pamiętaj aby rzeczywiście dać itemki, a nie scamować. Może to się skończyć **permem!**', true) // Wiadomość po stworzeniu ticketa.
    const member = button.clicker.member

    member.guild.channels.create(`ticket-mam-itemki`, { // Nazwa kanału UWAGA, TRZEBA TEZ ZMIENIC W PLIKU close.js !!
        permissionOverwrites: [
            {
                id: 915679616776171580,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"], // Permisje dla użytkownika kanału po stworzeniu ticketa.
                deny: ["ADD_REACTIONS"]
            },
            {
                id: button.message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL"] // Permisje dla @everyone.
            },
            {
                id: button.message.guild.roles.cache.get('899757939630415875'), //V-LIDERZY
                allow: ["VIEW_CHANNEL"]
            },
            {
                id: button.message.guild.roles.cache.get('899757939630415874'), // MISTRZOWIE
                allow: ["VIEW_CHANNEL"]
            }
        ],
        type: 'text'
    }).then(async channel => {
        channel.send(`<@${member.id}>`, new Discord.MessageEmbed().setTitle("<a:witaj:900142099482169365> Witaj!").setDescription('Chcesz dać nam itemy? \n _ _ \n W takim razie napisz co chcesz nam dać i w jakim celu! \n Lider lub V-Lider może wynagrodzić Cię za itemki wewnątrz gildii! \n _ _ \n Komenda zamknięcia ticketa: **p<close**').setColor("#5900ee").setTimestamp().setFooter('Developer: Gamer!', "https://i.imgur.com/5bFT3zx.png"))
        // Wiadomość wysłana na nowy ticket /\
    })

        
    }

    if(button.id == 'tic2') {
        button.reply.send('<a:Verify:900403484120195102> Ticket stworzony, życzymy powodzenia w rekrutacji!', true)
        const member = button.clicker.member

        member.guild.channels.create(`ticket-podanie`, {
            permissionOverwrites: [
                {
                    id: member.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
                    deny: ["ADD_REACTIONS"]
                },
                {
                    id: button.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${member.id}>`, new Discord.MessageEmbed().setTitle("<a:witaj:900142099482169365> Witaj!").setDescription('Cieszymy się, że chcesz dołączyć do naszej gildii, \n Odpowiedz na pytania, i poczekaj na odpowiedź \n Oto pytania rekrutacyjne:').addFields([{name: 'Pytanie 1:', value: '[~] 𝐈𝐥𝐞 𝐦𝐚𝐬𝐳 𝐥𝐚𝐭 ?'}, {name: 'Pytanie 2:', value: '[~] 𝐓𝐰𝐨𝐣𝐚 𝐨𝐬𝐭𝐚𝐭𝐧𝐢𝐚 𝐠𝐢𝐥𝐝𝐢𝐚 ?'}, {name: 'Pytanie 3:', value: '[~] 𝐃𝐥𝐚𝐜𝐳𝐞𝐠𝐨 𝐰 𝐧𝐢𝐞𝐣 𝐧𝐢𝐞 𝐣𝐞𝐬𝐭𝐞𝐬 ?'}, {name: 'Pytanie 4:', value: '[~] 𝐓𝐰𝐨𝐣𝐞 𝐏𝐯𝐏 𝐨𝐝 𝟏/𝟏𝟎'}, {name: 'Pytanie 5:', value: '[~] 𝐈𝐥𝐞 𝐠𝐨𝐝𝐳𝐢𝐧 𝐠𝐫𝐚𝐬𝐳 𝐝𝐳𝐢𝐞𝐧𝐧𝐢𝐞 ?'}, {name: 'Pytanie 6:', value: '[~] 𝐂𝐳𝐲 𝐬𝐥𝐮𝐜𝐡𝐚𝐬𝐳 𝐬𝐢𝐞 𝐥𝐢𝐝𝐞𝐫𝐨𝐰𝐤𝐢?'}, {name: 'Pytanie 7:', value: '[~] 𝐍𝐢𝐞 𝐝𝐫𝐳𝐞𝐬𝐳 𝐦𝐨𝐫𝐝𝐲 𝐩𝐨𝐝𝐜𝐳𝐚𝐬 𝐤𝐥𝐞𝐩𝐲/𝐩𝐫𝐳𝐞𝐛𝐢𝐭𝐲?'}, {name: 'Pytanie 8:', value: '[~] 𝐂𝐳𝐲 𝐝𝐚𝐣𝐞𝐬𝐳 𝐢𝐭𝐞𝐦𝐲 𝐧𝐚 𝐳𝐛𝐢𝐨𝐫𝐤𝐢 𝐠𝐢𝐥𝐝𝐲𝐣𝐧𝐞 ?'}, {name: 'Pytanie 9:', value: '[~] 𝐂𝐳𝐲 𝐣𝐞𝐬𝐭𝐞𝐬 𝐭𝐨𝐤𝐬𝐲𝐜𝐳𝐧𝐲 ?'}, {name: 'Pytanie 10:', value: '[~] 𝐂𝐳𝐲 𝐤𝐨𝐩𝐢𝐞𝐬𝐳 𝐧𝐨𝐜𝐤𝐢 𝐧𝐚 𝐢𝐭𝐞𝐦𝐲 ?'}, {name: 'Pytanie 11:', value: '[~] 𝐍𝐚 𝐣𝐚𝐤𝐢𝐜𝐡 𝐢𝐧𝐧𝐲𝐜𝐡 𝐬𝐞𝐫𝐰𝐞𝐫𝐚𝐜𝐡 𝐠𝐫𝐚𝐬𝐳?'}, {name: 'Pytanie 12:', value: '[~] 𝐂𝐨 𝐫𝐨𝐛𝐢𝐬𝐳 𝐠𝐝𝐲 𝐩𝐚𝐝𝐧𝐢𝐞𝐬𝐳 𝐧𝐩. 𝐧𝐚 𝐩𝐫𝐳𝐞𝐛𝐢𝐜𝐢𝐞?'}, {name: 'Pytanie 13:', value: '[~] 𝗝𝗮𝗸𝗶 𝗺𝗮𝘀𝘇 𝗻𝗶𝗰𝗸?'}]).setColor('#5900ee').setTimestamp().setFooter('Developer: Gamer!', 'https://i.imgur.com/5bFT3zx.png'))
        })
    }

    if(button.id == 'tic3') {
        button.reply.send('<a:Verify:900403484120195102> Ticket o tematyce: ZŁOSZENIE został stworzony!, nie zgłaszaj osoby niewinnej!', true)
        const member = button.clicker.member

        member.guild.channels.create(`ticket-3-zgloszenie`, {
            permissionOverwrites: [
                {
                    id: member.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
                    deny: ["ADD_REACTIONS"]
                },
                {
                    id: button.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${member.id}>`, new Discord.MessageEmbed().setTitle("<a:witaj:900142099482169365> Witaj!").setDescription('> Dziękujemy, za to że chcesz nam zgłosić gracza naszej gildii \n I nie boisz się o tym powiedzieć! \n > Nie zgłaszaj gracza tylko dlatego że go nie lubisz, takie zgłoszenia będą automatycznie usuwane\n Komenda zamknięcia ticketa: **p<close**').setColor('#5900ee').setTimestamp().setFooter('Developer: Gamer!', 'https://i.imgur.com/5bFT3zx.png'))
        })
    }

    if(button.id == 'tic4') {
        button.reply.send('<a:Verify:900403484120195102> Ticket: Inna sprawa!, Opisz dokładnie swój problem, \n Nie pisz wyrażeń typu: __Jest Lider??__, __Halo__ ', true)
        const member = button.clicker.member

        member.guild.channels.create(`ticket-4-inna-sprawa`, {
            permissionOverwrites: [
                {
                    id: member.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
                    deny: ["ADD_REACTIONS"]
                },
                {
                    id: button.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${member.id}>`, new Discord.MessageEmbed().setTitle("<a:witaj:900142099482169365> Witaj!").setDescription('Opisz dokładnie o co Ci chodzi! Jeżeli będziesz pisał słowa typu: __Jest lider?__, __Halo?__,\n Ticket zostanie automatycznie **usunięty**!\n Komenda zamknięcia ticketa: **p<close**').setColor('#5900ee').setTimestamp().setFooter('Developer: Gamer!', 'https://i.imgur.com/5bFT3zx.png'))
        })
    }
});


// REAKCJE DO MEMOW, PROPOZYCJI
client.on("message", msg => {
    const { author, guild, channel } = msg

    // MEMY
    // if (msg.channel == " ID KANAŁU") { // ID kanału który jest kanałem przeznaczonym na Memy.
        // msg.react("ID EMOJI") // Emoji które będzie dodawane do mema.
        // msg.react("ID EMOJI") // Emoji które będzie dodawane do mema.
        // return
    // }

    // PROPOZYCJE
    // if (msg.channel == '888860850847359017') { // ID kanału który będzie kanałem przeznaczonym na Propozycje.
    //     msg.react("<:emoji_7:890274888684814346>") // Emoji które będzie dodawane do propozycji.
    //     msg.react("<:emoji_8:890274964824018984>") // Emoji które będzie dodawane do propozycji.
    //     return
    // }
})  

// Wiadomość podczas włączania bota \/
client.once('ready', () => {
  console.log('---> --------- <---')
  console.log('---> ######### <---')
  console.log('---> # NOTRH # <---')
  console.log('---> #  BOT  # <---') // t2isXVUi2pQk0y7n
  console.log('---> ######### <---')
  console.log('---> --------- <---')
  console.log('Bot został połączony z discordem!');
  client.user.setActivity('MINECRAFT w gildii NORTH', {type: 'PLAYING'}); // Można zmieniać status na własny.

});

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}



client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 

// Możliwość dodawania nowych komend.
    if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'ogloszenie') {
        client.commands.get('ogloszenie').execute(message, args, Discord);
    } else if (command === 'minus') {
        client.commands.get('minus').execute(message, args, Discord, client);
    } else if (command === 'plus') {
        client.commands.get('plus').execute(message, args, Discord, client);
    } else if (command === 'weryfikacja') {
        client.commands.get('weryfikacja').execute(message, args, Discord, client);
    } else if (command === 'ticket-panel') {
        client.commands.get('ticket-panel').execute(message, args, Discord, client);
    } else if (command === 'close') {
        client.commands.get('close').execute(message, args, Discord, client);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args, Discord, client);
    } else if (command === 'nickname') {
        client.commands.get('nickname').execute(message, args, Discord, client);
    } else if (command === 'pytania') {
        client.commands.get('pytania').execute(message, args, Discord);
    } else if (command === 'userinfo') {
        client.commands.get('userinfo').execute(message);
    } else if (command === 'podanie') {
        client.commands.get('podanie').execute(message, args, Discord, client);
    } else if (command === 'regulamin') {
        client.commands.get('regulamin').execute(message, args, Discord);
    } else if (command === 'say') {
        client.commands.get('say').execute(message, args, Discord);
    } else if (command === 'usprawiedliwienia') {
        client.commands.get('usprawiedliwienia').execute(message, args, Discord, client);
    }
});
 
  
client.login(token);