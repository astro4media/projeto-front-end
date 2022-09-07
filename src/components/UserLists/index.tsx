import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/Astro4MediaAPI";
import getUserMedias from "../../services/Astro4MediaAPI/getUserMedias";
import { getMedia, IMedia } from "../../services/tmdb";
import Button from "../../styles/Button";
import List from "../List";

interface IUserSession {
  title: string;
  session: IMedia[];
}

const UserLists = () => {
  const [userSessions, setUserSessions] = useState<IUserSession[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadMedias = async () => {
      const userMedias = await getUserMedias(user.id);

      console.log();

      if (userMedias.length) {
        const mediaMarkups = [
          "Favoritos",
          "Assistindo",
          "Assistidos",
          "Parados",
        ];

        const sessions = mediaMarkups.map((mediaMarkup) => {
          const mediaSession = userMedias.reduce((mediaSession, userMedia) => {
            const { markups } = userMedia;
            if (markups === mediaMarkup) {
              mediaSession.push(userMedia.tmdbMedia);
            }
            return mediaSession;
          }, [] as IMedia[]);

          return {
            title: mediaMarkup,
            session: mediaSession,
          };
        });

        console.log(sessions);
        setUserSessions(sessions);
      }
    };

    loadMedias();
  }, []);

  return (
    <section className="userSessions">
      {userSessions.length ? (
        userSessions.map(({ title, session }, index) => {
          if (session.length) {
            return <List key={title} medias={session} sessionTitle={title} />;
          }
        })
      ) : (
        <Stack alignItems={"center"} className="noSessions">
          <h3>Você ainda não adicionou nenhum filme à suas listas</h3>
          <span>Olhe nosso catálgo e adicione</span>
          <Link to="/dashboard">
            <Button>Descubra mais</Button>
          </Link>
        </Stack>
      )}
    </section>
  );
};

export default UserLists;
