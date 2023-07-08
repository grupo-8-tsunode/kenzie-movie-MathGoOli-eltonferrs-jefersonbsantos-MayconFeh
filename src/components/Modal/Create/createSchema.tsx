import { z } from "zod";

export const AddreviewSchema = z.object({
  score: z.string().nonempty("Nota é Obrigatória"),
  description: z.string().nonempty("Descrição é obrigatória."),
});

export type TypeAddreviewSchema = z.infer<typeof AddreviewSchema>;
