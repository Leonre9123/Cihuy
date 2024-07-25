const fs = require('fs')

global.namabot = "Vinzz Bot"
global.namaowner = "Vinaa"
global.footer_text = "© Vinzz Bot " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62888070349807']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Haiii ${pushname} Saya adalah Vinaa Bot, Saya bertugas untuk menjaga grup dari org yg melanggar aturan di grup ini.

‣ Ketik Command Tanpa Titik
‣ Contoh : .menu = Menu

_Mau Grup Lu Ada Bot Jagagrup Seperti Ini Juga?? Chat 6282181293453_
❏––––––✎
┃*「 OWNER / ADMIN GC 」*
┃» ◇ Owner
┃» ◇ Addsewa
┃» ◇ Delsewa
┃» ◇ Ceksewa
┃» ◇ Listsewa
┃» ◇ Pay
┃» ◇ Tambah
┃» ◇ Kurang
┃» ◇ Kali
┃» ◇ Bagi
┃» ◇ Proses
┃» ◇ Done
┃» ◇ Setpay
┃» ◇ List
┃» ◇ Addlist
┃» ◇ Updatelist
┃» ◇ Renamelist
┃» ◇ Dellist
┃» ◇ Setproses
┃» ◇ Changeproses
┃» ◇ Delsetproses
┃» ◇ Setdone
┃» ◇ Changedone
┃» ◇ Delsetdone
┃» ◇ Setbot
┃» ◇ Updatesetbot
┃» ◇ Delsetbot
┃» ◇ Bot
┗––––––––––✦

⫹⫺––––––––––➭
┊*「 FITUR GROUP 」*
┊» ➭ Welcome
┊» ➭ Goodbye
┊» ➭ Setwelcome
┊» ➭ Changewelcome
┊» ➭ Delsetwelcome
┊» ➭ Setleft
┊» ➭ Changeleft
┊» ➭ Delsetleft
┊» ➭ Antiwame
┊» ➭ Antiwame2
┊» ➭ Antilink
┊» ➭ Antilink2
┊» ➭ Open
┊» ➭ Close
┊» ➭ Hidetag
┊» ➭ Add
┊» ➭ Kick
┊» ➭ Stiker
┊» ➭ Ffid
┊» ➭ Mlid
┊» ➭ Setppgc
┊» ➭ Setnamegc
┊» ➭ Setdesgc
┊» ➭ Linkgc
┊» ➭ Resetlinkgc
┊» ➭ Promote
┊» ➭ Demote
┊» ➭ Jeda
┗━═┅═━–––––––๑

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}