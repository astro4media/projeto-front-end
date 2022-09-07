import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import getUserMedias, {
  IUserMedia,
} from "../../services/Astro4MediaAPI/getUserMedias";
import { IMedia } from "../../services/tmdb";
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

      const mediaMarkups = ["Favoritos", "Assistindo", "Assistidos", "Parados"];

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
    };

    loadMedias();
  }, []);

  return (
    <section>
      {userSessions.map(({ title, session }, index) => {
        if (session.length) {
          return <List key={title} medias={session} sessionTitle={title} />;
        }
      })}
    </section>
  );
};

export default UserLists;
