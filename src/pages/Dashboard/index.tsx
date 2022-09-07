import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import List from "../../components/List";
import { discoverMedia, getMedia, IMedia, listMediaGenres, listMedias } from "../../services/tmdb";
import Container from "./styles";

const Dashboard = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [mediasPopular, setMediasPopular] = useState<IMedia[]>([]);
  const [mediasAction, setMediasAction] = useState<IMedia[]>([]);
  const [mediasAdventure, setMediasAdventure] = useState<IMedia[]>([]);
  const [mediasAnimation, setMediasAnimation] = useState<IMedia[]>([]);
  const [mediasComedia, setMediasComedia] = useState<IMedia[]>([]);
  const [mediasCrime, setMediasCrime] = useState<IMedia[]>([]);
  const [mediasDoc, setMediasDoc] = useState<IMedia[]>([]);
  const [mediasDrama, setMediasDrama] = useState<IMedia[]>([]);
  const [mediasFamily, setMediasFamily] = useState<IMedia[]>([]);
  const [mediasFantasia, setMediasFantasia] = useState<IMedia[]>([]);
  const [mediasHistoria, setMediasHistoria] = useState<IMedia[]>([]);
  const [mediasTerror, setMediasTerror] = useState<IMedia[]>([]);
  const [mediasMusic, setMediasMusic] = useState<IMedia[]>([]);
  const [mediasMistery, setMediasMistery] = useState<IMedia[]>([]);
  const [mediasRomance, setMediasRomance] = useState<IMedia[]>([]);
  const [mediasFiccaocien, setMediasFiccaocien] = useState<IMedia[]>([]);
  const [mediasCineTv, setMediasCineTv] = useState<IMedia[]>([]);
  const [mediasTriller, setMediasTriller] = useState<IMedia[]>([]);
  const [mediasWar, setMediasWar] = useState<IMedia[]>([]);
  const [mediasFaroeste, setMediasFaroeste] = useState<IMedia[]>([]);
  
  useEffect(() => {
    const test = async () => {
      const data = await listMedias("movie", "top_rated");
      const dataPopular = await listMedias("movie", "popular");
      const dataGerneroAction = await discoverMedia('movie', 28, 1)
      const dataGerneroAdventure = await discoverMedia('movie', 12, 1)
      const dataGerneroAnimation = await discoverMedia('movie', 16, 1)
      const dataGerneroComedia = await discoverMedia('movie', 35, 1)
      const dataGerneroCrime = await discoverMedia('movie', 80, 1)
      const dataGerneroDocumentario = await discoverMedia('movie', 99, 1)
      const dataGerneroDrama = await discoverMedia('movie', 18, 1)
      const dataGerneroFamily = await discoverMedia('movie', 10751, 1)
      const dataGerneroFantasia = await discoverMedia('movie', 14, 1)
      const dataGerneroHistória = await discoverMedia('movie', 36, 1)
      const dataGerneroTerror = await discoverMedia('movie', 27, 1)
      const dataGerneroMusic = await discoverMedia('movie', 10402, 1)
      const dataGerneroMisterio = await discoverMedia('movie', 10402, 1)
      const dataGerneroRomance = await discoverMedia('movie', 10749, 1)
      const dataGerneroFicçãoCientifica = await discoverMedia('movie', 878, 1)
      const dataGerneroCineTv = await discoverMedia('movie', 10770, 1)
      const dataGerneroThriller = await discoverMedia('movie', 53, 1)
      const dataGerneroWar = await discoverMedia('movie', 10752, 1)
      const dataGerneroFaroeste = await discoverMedia('movie', 37, 1)

      // const dataTestmidia = await getMedia("movie", 278);
      // console.log(dataTestmidia)
      
      setMedias(data);
      setMediasPopular(dataPopular);
      setMediasAction(dataGerneroAction)
      setMediasAdventure(dataGerneroAdventure)
      setMediasAnimation(dataGerneroAnimation)
      setMediasComedia(dataGerneroComedia)
      setMediasCrime(dataGerneroCrime)
      setMediasRomance(dataGerneroRomance)
      setMediasDoc(dataGerneroDocumentario)
      setMediasDrama(dataGerneroDrama)
      setMediasFamily(dataGerneroFamily)
      setMediasFantasia(dataGerneroFantasia)
      setMediasHistoria(dataGerneroHistória)
      setMediasTerror(dataGerneroTerror)
      setMediasMusic(dataGerneroMusic)
      setMediasMistery(dataGerneroMisterio)
      setMediasFiccaocien(dataGerneroFicçãoCientifica)
      setMediasCineTv(dataGerneroCineTv)
      setMediasTriller(dataGerneroThriller)
      setMediasWar(dataGerneroWar)
      setMediasFaroeste(dataGerneroFaroeste)
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
      <List sessionTitle="Filmes de Ação" medias={mediasAction} desc />
      <List sessionTitle="Filmes de Aventuras" medias={mediasAdventure} desc />
      <List sessionTitle="Animações" medias={mediasAnimation} desc />
      <List sessionTitle="Comedias" medias={mediasComedia} desc />
      <List sessionTitle="Terror" medias={mediasTerror} desc />
      <List sessionTitle="Crimes" medias={mediasCrime} desc />
      <List sessionTitle="Romance" medias={mediasRomance} desc />
      <List sessionTitle="Documentários" medias={mediasDoc} desc />
      <List sessionTitle="Dramas" medias={mediasDrama} desc />
      <List sessionTitle="Família" medias={mediasFamily} desc />
      <List sessionTitle="Fantasia" medias={mediasFantasia} desc />
      <List sessionTitle="História" medias={mediasHistoria} desc />
      <List sessionTitle="Musicas" medias={mediasMusic} desc />
      <List sessionTitle="Mistério" medias={mediasMistery} desc />
      <List sessionTitle="Ficção Científica" medias={mediasFiccaocien} desc />
      <List sessionTitle="Cinema TV" medias={mediasCineTv} desc />
      <List sessionTitle="Thrille" medias={mediasTriller} desc />
      <List sessionTitle="Guerra" medias={mediasWar} desc />
      <List sessionTitle="Faroeste" medias={mediasFaroeste} desc />
      <Outlet/>
    </Container>
  );
};

export default Dashboard;
