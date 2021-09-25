import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionCard from "../components/SectionCard";
import Welcome from "../components/Welcome";
import liveService from "../services/liveService";
import youtubeService from "../services/youtubeService";

const breakpoints = {
  sm: 200,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {});

const Section = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  margin-left: 5%;

  /* ${mq["sm"]} {
    width: 20%;
  } */
`

const SectionTitle = styled.h2`
  color: #ffffff;
`

const Container = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
    overflow-y: auto;
`

const ContainerMain = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-wrap: wrap;

  grid-area: main;
  flex-shrink: 0;
`

const ContainerLeft = styled.div`
  grid-area: main;
  flex-grow: 1;
  margin: 0 auto;
`

const Image = styled.img`
    height: 220px;
    width: 220px;
    margin: 20px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`

const ContainerRight = styled.div`
  grid-area: sidebar;
  background-color: #000000;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;

  ${mq["sm"]} {
    width: 30%;
  }

  & > h1 {
    margin-top: 10px;
    margin-left: 20px;

    color: white;
  }

  & > h3 {
    margin-top: 10px;
    margin-left: 20px;

    color: white;
  }
`

const Home = () => {
  const [lives, setLives] = useState([]);
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    const serviceLive = liveService();
    const serviceYoutube = youtubeService();
    serviceLive.getLives()
      .then(livesData => {
        setLives(livesData)
      })
    serviceYoutube.getYoutubes()
      .then(youtubesData => setYoutubes(youtubesData))
  }, [setLives, setYoutubes])

  return (
    <Container>
      <Header />
        <ContainerMain id='main'>
          <ContainerLeft>
            <Section>
              <SectionTitle>Próximos Lives</SectionTitle>
              <SectionCard data={lives} />
            </Section>
            <Section>
              <SectionTitle>Youtube Videos</SectionTitle>
              <SectionCard data={youtubes} />
            </Section>
          </ContainerLeft>
          <ContainerRight>
            <Welcome />
            <h1>Puedes contribuir si quieres ...</h1>
            <h3>👌 Uniendote a nuestro Discord</h3>
            <h3>👌 Contribuye en nuestos repositorios libres</h3>
            <h3>👌 Donación por ethereum, bsc, polygon WIP</h3>
            <Image src={require(`../assets/ethereum.png`).default} alt="" width="260px" />
          </ContainerRight>
        </ContainerMain>
       {/* <Footer /> */} 
    </Container>
  );
};

export default Home;
