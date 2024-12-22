const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© viotechinfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263782014685";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263782014685";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_03_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmVBWnhYUFN0OG4yMjBJNVY4QVZwb0Q4cTlkMzlqK1lQMTZmeS95MWZwND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM4MDEyMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyNzFBMjU1Q0VBMjBCQzQ3MUVBNzcxODU3OTZDOUY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDg5NzgxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzZXNUdDVlN1E3ZWZFM0E3YTdJdl9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjM2I3ZDFkLWRjZWQtNDA3ZC1iODcxLTkzNzllNzYyZTg1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICA0LFxuICAgICAgOTcsXG4gICAgICA4MCxcbiAgICAgIDIzMixcbiAgICAgIDIsXG4gICAgICAxOCxcbiAgICAgIDc5LFxuICAgICAgODAsXG4gICAgICA4MSxcbiAgICAgIDg2LFxuICAgICAgNTksXG4gICAgICAyMzAsXG4gICAgICAxNDUsXG4gICAgICAxNSxcbiAgICAgIDIzNSxcbiAgICAgIDExMSxcbiAgICAgIDM1LFxuICAgICAgMTg1LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDEyNSxcbiAgICAgIDEzNixcbiAgICAgIDExMCxcbiAgICAgIDY1LFxuICAgICAgMTg0LFxuICAgICAgMTI1LFxuICAgICAgMjUsXG4gICAgICAyNyxcbiAgICAgIDE3NyxcbiAgICAgIDEzLFxuICAgICAgNjcsXG4gICAgICA4MSxcbiAgICAgIDc5LFxuICAgICAgMjIyLFxuICAgICAgMTY5LFxuICAgICAgODEsXG4gICAgICA3NSxcbiAgICAgIDk5LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVc0UThGOTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzgwMTIwNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQzOTM2ODUyNTAxMDE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLelI2TFVIRUk3aG9ic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhsTHVQNWVCSDFRUDBBL2VaMjR0WXA1R2N0T0dvczBWQ3BYa1R3WlBYVlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTlRUZWNIYWZCZDFUTUNSMjh3bUs0d0tnU01nZUVuZnY5ME5LdXhBbGIxMzJEV0JVcGs2N0U4RkNIWWZydVo1SGRoeFVnWUdCR1pKVVlka0RUYXRTQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTB4MXBoTElrRkZta1J5MDN6emtJVGRhb1k1eGhVK3kwME5EYUVnNndFdGxvMGJ6Rm9zU2tYY0hsTjBzeVl0QVM2Z24zRGgvV281a1dsaU9KcHhRQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzODAxMjA2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4OTc4MTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zimpainhub ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "AM-vio",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VIO-XMD",
  ownername:process.env.OWNER_NAME|| "ZIMPAINHUB-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
