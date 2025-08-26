import z from 'zod';

export const sendWhatsappShema = z.object({
    id_event: z.uuid()
})