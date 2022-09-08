import Header from "../../components/Header";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Logo from "../../assets/images/logo.svg";
import image from "../../assets/images/image.webp";
import Eliseu from "../../assets/images/Eliseu.jpeg";
import VideoBG from "../../assets/videos/VideoBG.mp4";
import Container from "./styles";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header />
        <section className="topContent">
          <video className="videoContent" src={VideoBG} autoPlay muted loop />
          <figure className="logoBox">
            <img src={Logo} className="logoImage" alt="LOGO" />
          </figure>
        </section>
        <section className="middleContent">
          <div className="objective">
            <h2 className="titleContent">Nosso Objetivo</h2>
            <p className="textContent">
              A Astro4Media tem o objetivo de ajudar usuários a organizar e
              apresentar novas mídias. Com a Astro4Media, o usuário é capaz de
              adicionar filmes e séries com diversos marcadores, os que está
              assistindo, já assistiu, por gênero e muito mais. Além de conhecer
              novas graças ao nosso catálogo, ajudando o usuário a descobrir
              algo que nunca viu antes.
            </p>
          </div>
        </section>
        <section className="finalContent">
          <h2 className="titleContent">Equipe de Desenvolvimento</h2>
          <ul className="teamContent">
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img
                    src="https://ca.slack-edge.com/TQZR39SET-U0383NEF6VC-3a37fb2fd91c-512"
                    className="image"
                    alt="FOTO"
                  />
                </figure>
                <h3>Matheus Santos Brasil</h3>
                <h4>Product Owner</h4>
                <div className="boxButtons">
                  <a
                    href="https://www.linkedin.com/in/mathbrasil/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LinkedInIcon />
                    </button>
                  </a>
                  <a
                    href="https://github.com/mathbrasil"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <GitHubIcon />
                    </button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img
                    src="https://ca.slack-edge.com/TQZR39SET-U03841J5ULD-fcbfdcb0854e-512"
                    className="image"
                    alt="FOTO"
                  />
                </figure>
                <h3>David Kauan Avelino {/* Diógenes */}</h3>
                <h4>Tech Leader</h4>
                <div className="boxButtons">
                  <a
                    href="https://www.linkedin.com/in/david-kauan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LinkedInIcon />
                    </button>
                  </a>
                  <a
                    href="https://github.com/DavidKauan04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <GitHubIcon />
                    </button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img
                    src="https://ca.slack-edge.com/TQZR39SET-U0386THP45Q-a7e1cea012d9-512"
                    className="image"
                    alt="FOTO"
                  />
                </figure>
                <h3>Giuseppe Dias</h3>
                <h4>Scrum Master</h4>
                <div className="boxButtons">
                  <a
                    href="https://www.linkedin.com/in/giuseppe-dias/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LinkedInIcon />
                    </button>
                  </a>
                  <a
                    href="https://github.com/galio17"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <GitHubIcon />
                    </button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img src={Eliseu} className="image" alt="FOTO" />
                </figure>
                <h3>Eliseu Brito</h3>
                <h4>Quality Assurance</h4>
                <div className="boxButtons">
                  <a
                    href="https://www.linkedin.com/in/eliseubrito/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LinkedInIcon />
                    </button>
                  </a>
                  <a
                    href="https://github.com/eliseubrito"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <GitHubIcon />
                    </button>
                  </a>
                  <a
                    href="https://dev.to/eliseubrito"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LogoDevIcon />
                    </button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cardProfile">
              <div className="cardContent">
                <figure className="imageProfile">
                  <img
                    src="https://ca.slack-edge.com/TQZR39SET-U0387MC5YQK-bc8d63a3cc3a-512"
                    className="image"
                    alt="FOTO"
                  />
                </figure>
                <h3>Felipe Murakami</h3>
                <h4>Quality Assurance</h4>
                <div className="boxButtons">
                  <a
                    href="https://www.linkedin.com/in/felipe-murakami-625968235/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <LinkedInIcon />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FelipeMurakami"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardButton">
                      <GitHubIcon />
                    </button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </>
  );
};

export default About;
