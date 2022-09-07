import { Divider, Stack } from "@mui/material";
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
        <main>
          <Stack divider={<Divider flexItem />} spacing={5} alignItems="center">
            <ProfileCard />
            <UserLists />
          </Stack>
        </main>
      </Container>
    </motion.div>
  );
};

export default Profile;
