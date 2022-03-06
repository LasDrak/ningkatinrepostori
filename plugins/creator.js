const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Owner DevicBT",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner DevicBT\nitem1.TEL;waid=6285756507257:6285756507257\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:Devic@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://xxx.com\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Rusia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Rusia\nitem5.X-ABLabel:───────[ DevicBT ]───────\nEND:VCARD"
  }, {
  "displayName": "Johannes",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bg Johannes\nitem1.TEL;waid=62895612153565:62895612153565\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:Devic@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://xxx.com\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia\nitem5.X-ABLabel:───────[ DevicBT ]───────\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ ᴠᴇʀɪғʏ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler