//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263711348801";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJCaFBQVnU5ZTE3KzV1RGc3N0c4aHRENWlOQWY5TVRGcWRkMHQxY1dYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkcwdDZRUWVrR21mQ29QWnhWREFPdy9hNjVVVmU1K2p2VkRMWWVPNVVnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRzhlV0NBcEFMMFVTOUVhOUttaXpMalVWenVrcVYybnV2aVUzRlZvZDFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMDN3SElhcVdhaGR6N004QVRYMjRsZjlhRXhCN1ZSLzllNHQ5bGFaQnhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMQXYwNXVuVUwvWDFScFlHMnR5cllBdW9reVNtMUsvQ29zQTBzalNUMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpCeHF4U3ZFcVZ3Z1pISmdMQXhZWXhrOE43Z2M4dU5OWG1jTjE4ZC9xaVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJWZis0TW5hOVJ5ei9FOVZzbWVvYU4zeXU3MUxod3YrOUFXQklaRGJGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM09hWVlrZWtBMHZieFRSUXlHODVIV2pOc2wyc3VSTnNPK1Q4VlEwNktIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhyZ0NPUTBWSmplb0Q1SytxWHZwemlKbHA2dzBIWWtuRk9sS0pYVy9UclpjL3B1cFdOQXpadmdSMmhhK2UxWlNMdXVGbUVtelVpaHZGbm5rcDgwQ0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJVUXRVNllMbm16MWZIME5kQlV2WU1RVjJvZ2Ntd0xsL3lXQkNrb0o5RTlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmcFUxTlR3VVJ1NmZfSzBndHhXYWJRIiwicGhvbmVJZCI6IjU1ZDNlY2U1LTQxZjUtNDY0MS1iMDY0LTQ1YWNhMGQxMjdkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZlk0emNkNlFtLzBqTmxOREZ4NUJKQzNldkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3FkTStyTFl4c2MvU0ZqNVlwNktmVTRkbVBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko4RVoxV0ExIiwibWUiOnsiaWQiOiIyNjM3MTEzNDg4MDE6NzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGFsa21vcmUgTWFzaGF5YW1vbWJlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUEl1TUlIRUt2SHlMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmVW5Ock5hcXJsZFpzbEVTYUNnYXJKREd6U053cnBncDBkWkYzQTRrRWowPSIsImFjY291bnRTaWduYXR1cmUiOiJ0YVpzUXFFNmsvNmtkY1JrSmtvandBNnppbU02K1YvakJROGJHNW50RjJCbk84ckhWQmFBSHQxV2g0RFBBOHJtdlNCbjl5c3lkNmMxK0hRZkVyQkFCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2x6NFp6MjhKaXNDRy9ZQTZwblM1M3V1c3BrdE1CaHdXUy80RTJqVUZuTXUwdXVRU2xJbWM4WFc4NVRmMHYydmlta2VPZmo1T0tKcmlSdCtmK2hwQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTEzNDg4MDE6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDFKemF6V3FxNVhXYkpSRW1nb0dxeVF4czBqY0s2WUtkSFdSZHdPSkJJOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk1MDU4NX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_TALSEY™`",
  author: process.env.PACK_AUTHER || "QUEEN_TALSEY",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_TALSEY",
  ownername: process.env.OWNER_NAME || "TARLIFE",
  errorChat: process.env.ERROR_CHAT || "263711348801",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
