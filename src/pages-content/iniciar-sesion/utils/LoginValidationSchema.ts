import { z } from 'zod';

const LoginValidationSchema = z.object({
    user: z.string({ required_error: 'Requerido' }).min(1, 'Requerido'),
    password: z.string({ required_error: 'Requerido' }).min(1, 'Requerido'),
});

export default LoginValidationSchema;
