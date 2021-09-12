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

const Home = () => {
  const [lives, setLives] = useState([]);
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    const serviceLive = liveService();
    const serviceYoutube = youtubeService();
    serviceLive.getLives()
      .then(livesData => {
        console.log('livesData', livesData)
        setLives(livesData)
      })
    serviceYoutube.getYoutubes()
      .then(youtubesData => setYoutubes(youtubesData))
  }, [setLives, setYoutubes])

  return (
    <>
      <Header />
      <Section>
        <h3>Próximos Lives</h3>
        <SectionCard data={lives} />
      </Section>
      <Section>
        <h3>Youtube Videos</h3>
        <SectionCard data={youtubes} />
      </Section>
    </>
  );
};

export default Home;
