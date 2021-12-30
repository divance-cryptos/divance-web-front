import styled from '@emotion/styled';

export const breakpoints = {
  sm: 200,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {});

export const Section = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  margin-left: 5%;

  /* ${mq["sm"]} {
    width: 20%;
  } */
`
export const SectionTitle = styled.h2`
  color: #ffffff;
`

export const Container = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-template-rows:ReactMarkdown auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
    overflow-y: auto;
`

export const ContainerMain = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-wrap: wrap;

  grid-area: main;
  flex-shrink: 0;
`

export const ContainerLeft = styled.div`
  grid-area: main;
  flex-grow: 1;
  margin: 0 auto;
`

export const ContainerRight = styled.div`
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
