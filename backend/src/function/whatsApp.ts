import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const clientWhatsApp = new Client({
  authStrategy: new LocalAuth(),
});

clientWhatsApp.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

clientWhatsApp.on("ready", () => {
  console.log("✅ WhatsApp conectado!");
});

clientWhatsApp.initialize();

export default clientWhatsApp;
