import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  bio: yup
    .string()
    .required("Bio é obrigatória")
    .min(10, "A biografia deve conter ao menos 10 caracteres"),
  avatar: yup
    .string(),
});

export { loginSchema, registerSchema };
