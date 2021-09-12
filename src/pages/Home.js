import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import liveService from "../services/liveService";
import youtubeService from "../services/youtubeService";

const Section = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 20px;
`

const SectionTitle = styled.h2`
  color: #ffffff;
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
    <>
      <Header />
      <Section>
        <SectionTitle>Próximos Lives</SectionTitle>
        <SectionCard data={lives} />
      </Section>
      <Section>
        <SectionTitle>Youtube Videos</SectionTitle>
        <SectionCard data={youtubes} />
      </Section>
    </>
  );
};

export default Home;
