import { motion } from "framer-motion";
import FormInput from "../../components/formInput";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin } from "../../contexts/AuthContext";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logoName from "../../assets/images/logoName.svg";
import rocket from "../../assets/images/rocketLogo.svg";
import { toast } from "react-toastify";

import LoginContainer from "./styles";
import { userLogin } from "../../services/Astro4MediaAPI";

const Login = () => {
  const [value, setValue] = useState(false);
  const [eyeValue, setEyeValue] = useState("password");
  const navigate = useNavigate();

  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Deve ser um email")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "Deve haver no minimo 8 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: IUserLogin) => {
    await userLogin(data)
      .then(() => {
        toast.success("Login feito com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Login ou senha incorreto", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <LoginContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
        className="container-content"
      >
        {/* isso é apenas um exemplo */}
        {/* <motion.img
          className="logo-image"  
          src={logo}
          alt="Logo" 
          initial={{opacity: 0, y: -200}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -200}}
          transition={{type: 'spring', damping: 8.5, duration: 2, delay: 0.7}}
          /> */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ type: "spring", damping: 8.5, duration: 2, delay: 0.7 }}
          className="div-logo"
        >
          <motion.img
            src={rocket}
            alt={"rocket logo"}
            className="rocket-logo"
            initial={{ x: -80, y: 80, opacity: 0 }}
            animate={{ x: 18, y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img src={logoName} alt={"logo Name"} className="name-logo" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
        >
          <h1>Login</h1>
          <FormInput
            id="email"
            type="email"
            label="Email"
            register={register}
            errors={errors}
          ></FormInput>
          <FormInput
            id="password"
            type={eyeValue}
            label="Senha"
            register={register}
            errors={errors}
          >
            {value ? (
              <button
                type="button"
                className="viewEyes"
                onClick={() => {
                  setValue(!value);
                  setEyeValue("password");
                }}
              >
                <MdOutlineRemoveRedEye />
              </button>
            ) : (
              <button
                type="button"
                className="viewEyes"
                onClick={() => {
                  setValue(!value);
                  setEyeValue("text");
                }}
              >
                <RiEyeCloseLine />
              </button>
            )}
          </FormInput>
          {/* <FormInput
          id='conect'
          type='checkbox'
          label=''
          register={register}
          errors={errors}
          >
            <p>Permanecer Conectado?</p>
          </FormInput> */}
          <button type="submit" className="submitForm">
            Entrar
          </button>
          <span>
            Não possui uma conta?{" "}
            <a className="link-register" onClick={() => navigate("/register")}>
              Criar
            </a>
          </span>
        </motion.form>
      </motion.div>
    </LoginContainer>
  );
};

export default Login;
