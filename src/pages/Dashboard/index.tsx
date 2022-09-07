import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import { getMedia, IMedia, listMediaGenres, listMedias } from "../../services/tmdb";
import Container from "./styles";

const Dashboard = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [mediasPopular, setMediasPopular] = useState<IMedia[]>([]);
  
  useEffect(() => {
    const test = async () => {
      const data = await listMedias("movie", "top_rated");
      const dataPopular = await listMedias("movie", "popular");
      // const dataTest = await listMediaGenres("tv");
      // const dataTestmidia = await getMedia("movie", 278);
      
      
      setMedias(data);
      setMediasPopular(dataPopular);
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
      <List sessionTitle="Filmes mais bem avaliados" medias={medias} desc />
      <List sessionTitle="Filmes Populares" medias={mediasPopular} desc />
    </Container>
  );
};

export default Dashboard;
