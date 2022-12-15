import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    names: z
        .string()
        .min(1, { message: 'El campo de los nombres no puede estar vacío.' })
        .max(100, {
            message: 'El campo de los nombres no debe exceder los 100 caracteres.',
        }),
    surnames: z
        .string()
        .min(1, { message: 'El campo de los apellidos no puede estar vacío.' })
        .max(100, {
            message: 'El campo de los apellidos no debe exceder los 100 caracteres.',
        }),
});

export const CreateEmployeeResolver = zodResolver(schema);
