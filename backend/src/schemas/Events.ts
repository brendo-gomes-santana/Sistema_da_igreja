import z from 'zod';

export const CreateEventSchema = z.object({

    name: z.string().min(1, "name is a required field"),
    date: z.string()
        .refine((val) => {
            const d = new Date(val);
            if (isNaN(d.getTime())) return false; // inválido
            const today = new Date();
            today.setHours(0, 0, 0, 0); // só data
            return d >= today; // só hoje ou futuro
        }, "date must be today or in the future"),
    observation: z.string().optional(),

    levitas: z.array(
        z.object({
            id_type: z.uuid({
                error: "id_type must be a valid UUID"
            }).min(1, "id_type is required field"),
            id_levite: z.uuid({
                error: "id_levite must be a valid UUID"
            }).min(1, "id_levite is required field"),
        })
    ),

    musics: z.array(
        z.object({
            order: z.number(),
            id_category: z.uuid({
                error: "id_category must is valid UUID"
            }).optional(),
            id_music: z.uuid({
                error: "id_music must is valid UUID"
            }),
        })
    ).optional()
})

export const UniqueIdEventSchema = z.object({
    id: z.uuid({
        error: "id of event must be a valid UUID"
    })
})
