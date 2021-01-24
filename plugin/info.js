let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @B2K_XPLOIT
║
╠➥ Github: https://github.com/Arya274/Arya-DN
╠➥ Instagram: @arpunchs
╠➥ YouTube: Drawl Nag
║
╠═〘 Thanks To 〙 ═
╠➥ Allah Swt
╠➥ Ortu
╠➥ Doi 
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Axis 0838-3076-6659
║
║>Request? Wa.me/6283830766659
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

