import { z } from 'zod';

export const CreateMusicSchema = z.object({
    title: z.string().min(1, 'title is required'),
    url_image: z.url()
        .regex(
            /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff)(\?.*)?$/i,
            'must be a valid image URL'
        ).min(1, 'url_image is a required field'),
    link_CifraClub: z.url({
        error: 'URL is valid'
    }).min(1, 'link_CifraClub is a required field'),
    id_youtube: z.string().min(1, 'id_youtube is a required field'),
    letter: z.string().min(1, 'letter is a required field'),
    id_category: z.uuid({
        error: 'id_category must be a viled UUID'
    }).min(1, 'id_category is a required field')
});
