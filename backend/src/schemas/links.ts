import z from 'zod';

export const CreateLinkShema = z.object({
    links: z.array(
        z.object({
            id_type: z.uuid({
                error: "id_type must be valid UUID"
            }),
            id_music: z.uuid({
                error: "id_music must be valid UUID"
            }),
            link: z.url({
                error: "link aren't url"
            })
        })
    )
})