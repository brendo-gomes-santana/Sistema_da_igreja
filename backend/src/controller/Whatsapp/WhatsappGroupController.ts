import { FastifyRequest, FastifyReply } from "fastify";
import { format } from "date-fns";

import clientWhatsApp from "../../function/whatsApp";
import UniqueEventServer from "../../server/Events/UniqueEventServer";

import { sendWhatsappShema } from "../../schemas/whatsapp";

export default async function WhatsappGroupController(
    req: FastifyRequest,
    reply: FastifyReply
) {

    try {

        const { id_event } = sendWhatsappShema.parse(req.params);
        const eventDetail = await UniqueEventServer({ id: id_event })

        const message = `*ESCALA*\n${eventDetail.name}\n\n*DATA*:\n${format(new Date(eventDetail.date), 'dd/MM/yyyy') }\n\n*OBSERVACAO*\n${eventDetail.observation}\n\n*BANDA*\n${eventDetail.levites.map(item => `${item.name} (${item.function})`).join('\n')}\n\n*LOUVORES*\n*Celebração*\n${eventDetail.musics.filter(item => item.category.name === 'Celebração').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Adoração*\n${eventDetail.musics.filter(item => item.category.name === 'Adoração').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Oferta*\n${eventDetail.musics.filter(item => item.category.name === 'Oferta').map(item => `_${item.name}_\nYoutube: https://www.youtube.com/watch?v=${item.id_youtube}\nMais: ${process.env.URL_FRONTEND}/musica/${item.id_music}`).join('\n\n')}\n\n*Link*: ${process.env.URL_FRONTEND}/escala/${eventDetail.id}`;
        

        await clientWhatsApp.sendMessage(process.env.IDGROUPWHATSAPP as string, message)

        return reply.status(200).send(message)

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Erro in send a message to whatsApp"
        });
    }


}