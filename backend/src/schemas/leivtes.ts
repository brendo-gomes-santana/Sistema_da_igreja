import z from 'zod';

export const CreateLeviteSchema = z.object({
    name: z.string().min(1, 'name is a required field'),
    types: z.uuid().array()
})