import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import logo from '../assets/talkdefi.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const ItemCover = styled.div`
    height: 220px;
    width: 220px;
`;

const ItemLinks = styled.div`
    flex: 1;
    margin-top: 4px;
`

const Image = styled.img`
    height: 220px;
    width: 220px;
`

const LiveDetail = ({ watchLink, thumb }) => {
  const [, setImage] = useState('');
  const loadImage = thumb => {
    if (thumb) {
      import(`../assets/${thumb}.png`).then(image => {
        setImage({
          image
        });
      });
    }
  };

  useEffect(() => {
    loadImage(thumb);
  }, [thumb])

  return (
    <Container>
      <ItemCover>
        <Image src={logo} alt="" />
      </ItemCover>
      <ItemLinks>
        <a href={watchLink}><Button>Watch</Button></a>
      </ItemLinks>
    </Container>
  );
};

export default LiveDetail;
