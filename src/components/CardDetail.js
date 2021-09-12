import styled from "@emotion/styled";
import Button from "./Button";

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
  return (
    <Container>
      <ItemCover>
        <Image src={require(`../assets/${thumb}.png`).default} alt="" width="260px" />
      </ItemCover>
      <ItemLinks>
        <a href={watchLink}><Button>Watch</Button></a>
      </ItemLinks>
    </Container>
  );
};

export default LiveDetail;
