import { motion } from "framer-motion";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import UserLists from "../../components/UserLists";
import Container from "./styles";

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Header />
        <ProfileCard />
        <UserLists />
      </Container>
    </motion.div>
  );
};

export default Profile;
