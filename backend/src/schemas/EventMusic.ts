import z from "zod";

export const createMusicEventSchema = z.object({
    order: z.number(),
    id_event: z.uuid(),
    id_music: z.uuid(),
    id_category: z.uuid().optional()
})