let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: NtangNcil
╠➥ Script: @KevinAnggara
║
╠➥ Github: https://github.com/Ntangchil/Nchill
╠➥ Instagram: @b2k_xploit
║
╠═〘 Thanks To 〙 ═
╠➥ Mr.Foxzy
╠➥ Mr.G3P5
╠➥ DhyZx
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Axis: 0838-3076-6659
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

