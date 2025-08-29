import z from 'zod';

export const IdLeviteEventShema = z.object({
    id: z.uuid({ error: 'id must be valid UUID' })
}) 

export const CreateleviteEventShema = z.object({
    id_levite: z.uuid(),
    id_type: z.uuid(),
    id_event: z.uuid(),
})