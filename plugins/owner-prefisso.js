let handler = async(m, { conn, text }) => {
  if (!text) throw `scegli un prefisso`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`prefisso cambiato in: *${text}*`)
    // conn.fakeReply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 𝙷𝙰 𝚂𝙸𝙳𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙰 *${text}*', '0@s.whatsapp.net', 'Set Prefix Bot')
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(prefisso)$/i
handler.rowner = true

export default handler 
