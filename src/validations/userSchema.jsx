import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"), // Adicionado required por segurança
  password: yup.string().min(6, "Senha muito curta").required("Senha obrigatória") // Corrigido para password
});
