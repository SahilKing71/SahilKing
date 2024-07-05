const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*🇲‌𝐮𝐝𝐚𝐬𝐢𝐫  ☻︎ 🇸𝐩𝐨𝐫𝐭𝐬™⁹⁵*" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923239956476";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_19_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVtbTBLRjNKNFdDRXRaVXZRcENpRkFjRWcyRjByY2JZZDNRTTFpcmQ3amM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxhcXJlYVdBUXl5UVlIT1ItMThYT2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGVhYjUyYmItNjIwOS00OWY5LWIyOTctMWVlMDliNGE1MmZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgNTgsXG4gICAgICAxODAsXG4gICAgICAxNTgsXG4gICAgICAxNDgsXG4gICAgICAxNjIsXG4gICAgICAxMTYsXG4gICAgICA4LFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICA3LFxuICAgICAgMTIxLFxuICAgICAgODgsXG4gICAgICA5MixcbiAgICAgIDU1LFxuICAgICAgNTcsXG4gICAgICAyMzMsXG4gICAgICA3NixcbiAgICAgIDEyMSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTMzLFxuICAgICAgMjMyLFxuICAgICAgNDUsXG4gICAgICAxOSxcbiAgICAgIDE5MSxcbiAgICAgIDEzMyxcbiAgICAgIDYzLFxuICAgICAgMTkxLFxuICAgICAgMjExLFxuICAgICAgMTIwLFxuICAgICAgOTEsXG4gICAgICAxNTYsXG4gICAgICAyMjQsXG4gICAgICAyMDAsXG4gICAgICAyMTAsXG4gICAgICA3MyxcbiAgICAgIDU4LFxuICAgICAgMzcsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5TE5EU1BZTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjM5OTU2NDc2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTA0NjY4MTkzMjYxNjY6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdJaXQ0Q0VLcVVuYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzWWpHTmN4YVlSWTUxR0RKQzdyK2ExL1R4UzQ5R2IxeGtEcW1nUFJYRkQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjI5bVllb0lnWWJEY3NnQ3ZLbXl4Vm5wRk1vbTN2ZWJUSmllV1N1L0I0VVc3cmx2d0ZlOXRNNkRzbEhvb0ZCajVtMmx1MHlsbFNhWTZjc3p6cjlCZEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZ2ZzFWcWlaQ09EL0VnNDdNWlBqbXFsd1dmY2JtWE5SSDJMY1cvQUVRM1Q2eXEvNFFHMVNHemtMQmVBSm1QazFWclBKUnBzRmFSeEl3ek1Zc09iWGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzOTk1NjQ3NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE0MjM4MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍ", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.enACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mudasir King⁹⁵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
