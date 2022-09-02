import { motion } from "framer-motion";
import FormInput from "../../components/formInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ContainerRegister from "./styles";

const Register = () => {
  const { setLoading } = useAuth();
  const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("O email é obrigatório"),
    senha: yup.string().required("A senha é obrigatória").min(8),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),
    bio: yup.string().required("A bio é obrigatória"),
    avatar: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Adicione uma URL valido!"
      )
      .required("Adicione um URL"),
    check: yup.boolean().oneOf([true], "Preencha o termo de uso"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ContainerRegister>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="div-main">
          <figure>
            <img src="" alt="logo" />
          </figure>
          
          <form onSubmit={handleSubmit((FormData) => console.log())}>
            <h1 className="title-register">Cadastrar</h1>
            <FormInput
              id="nome"
              type="text"
              label="Nome"
              register={register}
              errors={errors}
              children
            ></FormInput>
            <FormInput
              id="email"
              type="text"
              label="Email"
              register={register}
              errors={errors}
              children
            ></FormInput>
            <FormInput
              id="senha"
              type="text"
              label="Senha"
              register={register}
              errors={errors}
              children
            ></FormInput>
            <FormInput
              id="confirmarSenha"
              type="text"
              label="Confirmar Senha"
              register={register}
              errors={errors}
              children
            ></FormInput>
            <FormInput
              id="bio"
              type="text"
              label="Bio"
              register={register}
              errors={errors}
              children
            ></FormInput>
            <FormInput
              id="url"
              type="url"
              label="Avatar"
              register={register}
              errors={errors}
              children
            ></FormInput>

            <div className="div-checkbox">
              <FormInput
                id="check"
                type="checkbox"
                label=""
                register={register}
                errors={errors}
              >   
              <p>Concordo com os termos de uso</p>
              </FormInput>
              
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </motion.div>
    </ContainerRegister>
  );
};

export default Register;
