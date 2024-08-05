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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdCNWdDUmlpSXhhUmlxTDlLMUgrQzZTRkw5WTJEZ3FIMmlDeWpLNmcwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURjWWJodTJLMWRPakRIblM3NVZNSzlBNkdIUzlQY1FmSFhNY1NYWkowOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQjNxNlZvR3Rya2hoV3BOK0hBemhyZkpMaFdJN2RsRzEzWE9BcUMzSldjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTVoyZDg3Nk95bmdGSDNJa01aaVpVdjdFMGtwU2ZKc3gyemdmdDlLc3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDa0FXY3ZveEkxaytjK0FyeEt0WkJFMlFUZDZ2Q3pkV0pNTFBEWk9vbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdWd3pscURQem9seEhoZHMwbS9XWE4yYUk4VUs0SmtkMi9QejJBQXMwaFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURzK2U1c2FWeDNCdmIrenZjWWlwSWtNRUJyclRqYnJ0UkdLMFJRU1JYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicG1yYnF5OUV3TThzQ2VBK2s5N3ZJNXJ1dnlsZUZOV2I5NXdsdjMxdVNucz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkvbXdQa0prZitJU2pHS3R6ODd6S1EvVmNsdktkVDY1M2NIaTBBNU12ZUpHQU1HQW44NjQrVFYzTlJzTVJvbVhDRHRDSjFxYitkZTB1NjJmMmR2eUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6IjNlczJyejVEeWtES2loM1p6RDMrbUZEQzd2ZGRQa3Z2N2VtamdiM3MvMk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9UY0lMZGdBU1AtOHBlblZZZFNSblEiLCJwaG9uZUlkIjoiOWM4Y2Q0ZDEtZTQ3OC00ZGE1LWFmYzUtZTc2YjAwNTdjYjU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlWmROMWxrb0JpZS94NjhwRnp4Wk1KQzVmQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydlRNZ0dTZkozTTJiNUZRS1NGKy8rOWluVTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzVMWkFDN0ciLCJtZSI6eyJpZCI6IjI2MzcxMTM0ODgwMTo3MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUYWxrbW9yZSBNYXNoYXlhbW9tYmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMSXVNSUhFTkwzdzdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZVbk5yTmFxcmxkWnNsRVNhQ2dhckpER3pTTndycGdwMGRaRjNBNGtFajA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjcrbDV0djRBSW1QeEVpanY3cHdtVFQ4cGNmS0dWUzhwNXBxazBSR3h5MG9LRmwvZWlkUjhDVC8wcDU1NENnTDZSNVkrYWQrNndTVDlNb2RTS0xmYUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0M3ZabDMxMTgwQ0w1N1I1akF5NGxTVDQ2bmQyaEhUNjdFUW1pTGNlbzBZaCt4NDVKZ3F0d2Qvb0ZWMk50VUl0WTNRbjZVVWdzZmpCZW5pWWVXSmZCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMTM0ODgwMTo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYMUp6YXpXcXE1WFdiSlJFbWdvR3F5UXhzMGpjSzZZS2RIV1Jkd09KQkk5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODc0ODQ3fQ=="
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
