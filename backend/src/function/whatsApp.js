"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const clientWhatsApp = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth(),
});
clientWhatsApp.on("qr", (qr) => {
    qrcode_terminal_1.default.generate(qr, { small: true });
});
clientWhatsApp.on("ready", () => {
    console.log("✅ WhatsApp conectado!");
});
clientWhatsApp.initialize();
exports.default = clientWhatsApp;
