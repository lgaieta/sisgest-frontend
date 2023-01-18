import { z } from 'zod';

export const stringValidateSchema = z
    .string({ required_error: 'Requerido' })
    .min(1, 'Requerido');
export const numberValidateSchema = z
    .number({ required_error: 'Requerido', invalid_type_error: 'Requerido' })
    .gte(1, 'Requerido');
