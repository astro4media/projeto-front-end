import { motion } from "framer-motion";
import Header from "../../components/Header";
import Container from "./styles";

const Dashboard = () => {
  return (
    <Container as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
