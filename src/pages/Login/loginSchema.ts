import { z } from "zod";

export const loginSchema= z.object({
    email: z.string().nonempty("email é obrigatório.").email("Email fornecido é inválido"),
    password: z.string().nonempty("informe senha")
})

export type TypeLoginFormValue = z.infer<typeof loginSchema> 