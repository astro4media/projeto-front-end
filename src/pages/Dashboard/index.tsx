import { motion } from "framer-motion";
import { useState } from "react";
import ModalComponent from "../../components/Modal";

const Dashboard = () => {
  const [open,setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => setOpen(true)}>ATIVAR</button>
      <button onClick={() => setOpen(true)}>ATIVAR2</button>
      <ModalComponent navigate='..' open={open}>
        <div>
          <h1>OI</h1>
        </div>
      </ModalComponent>
      </div>

    </motion.div>
  );
};

export default Dashboard;
