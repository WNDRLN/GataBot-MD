import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, isBotAdmin, usedPrefix, groupMetadata, participants }) => { 
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}

let txt = ''
let group = m.chat
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([jid]) => jid.endsWith('@g.us'))
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('https://chat.whatsapp.com/') + conn.groupInviteCode(jid) && chat.isChats)) 


let Link = conn.groupInviteCode(jid) 
txt += `*✦ Grupo:* ${await conn.getName(jid)}
*✦ Enlace:* ${jid.isBotAdmin ? '*Enlace no encontrado*' : 'https://chat.whatsapp.com/' + ``}
*✦ Creador(a):* ${jid.split`@`[0].length >= 15 ? `*Creador no encontrado*` : `*Wa.me/${jid.split`@`[0]}*`}
*✦ Usuarios:* ${participants.length}
*✦ Mí estadía:* ${chat?.metadata?.read_only ? '❌ *SIN ESTAR AQUÍ | NO*' : '✅ *SIGO AQUÍ | YES*'}\n\n`
  
conn.sendButton(m.chat, `*${gt} ESTÁ EN ESTOS GRUPOS*\n*IS IN THESE GROUPS:*\n*Total de Grupos:* ${groupsIn.length}\n\n`, txt, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)

}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
