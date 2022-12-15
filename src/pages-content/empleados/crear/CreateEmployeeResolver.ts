import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    names: z
        .string()
        .min(1, { message: 'El campo de los nombres no puede estar vacío.' }),
    surnames: z
        .string()
        .min(1, { message: 'El campo de los apellidos no puede estar vacío.' }),
});

export const CreateEmployeeResolver = zodResolver(schema);
