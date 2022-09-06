import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import { IMedia, listMedias } from "../../services/tmdb";
import Container from "./styles";

const Dashboard = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);

  useEffect(() => {
    const test = async () => {
      const data = await listMedias("movie", "top_rated");
      setMedias(data);
    };

    test();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      {/* <List sessionTitle="Top Rated" medias={medias} desc /> */}
    </Container>
  );
};

export default Dashboard;
