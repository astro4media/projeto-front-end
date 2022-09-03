import { motion } from "framer-motion";
import FormInput from "../../components/formInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserRegister, useAuth } from "../../contexts/AuthContext";
import ContainerRegister from "./styles";
import { userRegister } from "../../services/userRegister";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { setLoading } = useAuth();
  const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ser mais que 6 caracteres"),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),
    bio: yup.string().required("A bio é obrigatória"),
    avatar: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Adicione uma URL valido!"
      ),
    check: yup.boolean().oneOf([true], "Preencha o termo de uso"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const registerSubmit = async (formData: IUserRegister) => {
    await userRegister(formData)
      .then((formData) => {
        console.log("Funfo");
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(function () {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Deu ruim mermão!", {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <ContainerRegister>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="">
          <figure>
            <img src="" alt="logo" />
          </figure>
          <form onSubmit={handleSubmit(registerSubmit)}>
            <h1>Cadastrar</h1>
            <FormInput
              id="name"
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
              id="password"
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

            <FormInput
              id="check"
              type="checkbox"
              label="Termos de uso"
              register={register}
              errors={errors}
            >
              <p>Concordo com os termos de uso</p>
            </FormInput>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </ContainerRegister>
  );
};

export default Register;
