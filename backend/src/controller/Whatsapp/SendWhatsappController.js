"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SendWhatsappController;
const date_fns_1 = require("date-fns");
const whatsApp_1 = __importDefault(require("../../function/whatsApp"));
const UniqueEventServer_1 = __importDefault(require("../../server/Events/UniqueEventServer"));
const whatsapp_1 = require("../../schemas/whatsapp");
async function SendWhatsappController(req, reply) {
    try {
        const { id_event } = whatsapp_1.sendWhatsappShema.parse(req.params);
        const eventDetail = await (0, UniqueEventServer_1.default)({ id: id_event });
        const message = `*ESCALA*\n${eventDetail.name}\n\n*DATA*:\n${(0, date_fns_1.format)(new Date(eventDetail.date), 'dd/MM/yyyy')}\n\n*OBSERVACAO*\n${eventDetail.observation}\n\n*BANDA*\n${eventDetail.levites.map(item => `${item.name} (${item.function})`).join('\n')}\n\n*LOUVORES*\n*Celebração*\n${eventDetail.musics.filter(item => item.category.name === 'Celebração').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Adoração*\n${eventDetail.musics.filter(item => item.category.name === 'Adoração').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Oferta*\n${eventDetail.musics.filter(item => item.category.name === 'Oferta').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Link*: ${process.env.URL_FRONTEND}/escala/${eventDetail.id}`;
        await whatsApp_1.default.sendMessage(process.env.IDGROUPWHATSAPP, message);
        return reply.status(200).send(message);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Erro in send a message to whatsApp"
        });
    }
}
