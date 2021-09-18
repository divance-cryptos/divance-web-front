import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const ItemCover = styled.div`
    height: 220px;
    width: 220px;
`;

const Image = styled.img`
    height: 220px;
    width: 220px;
`

const LiveDetail = ({ watchLink, thumb }) => {
  return (
    <Container>
      <ItemCover>
        <a href={watchLink}><Image src={require(`../assets/${thumb}.png`).default} alt="" width="260px" /></a>
      </ItemCover>
    </Container>
  );
};

export default LiveDetail;
