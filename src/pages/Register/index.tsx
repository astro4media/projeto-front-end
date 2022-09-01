import { motion } from "framer-motion";
import FormInput from "../../components/formInput";

const Register = () => {


  return (
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
        <form action="">
          <FormInput 
          id='id'
          type='text'
          label='name'
          register=  
          errors={Error}
          >

          </FormInput>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
