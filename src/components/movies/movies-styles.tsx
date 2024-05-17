import styled from "styled-components";

export const MoviesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const EachMovie = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "image wording";
`;

export const MovieWording = styled.div`
  grid-area: wording;
`;
