import styled from "styled-components";



export const ProductsWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  gap: 50px;
  
`;

export const SignleProductWrapper = styled.div`
  display: grid;
  width: 300px;
  grid-template-coloums: 1fr, 1fr;
  grid-template-rows: 1fr, 6fr;
  border-style: solid;
  border-color:grey; 
`;

export const ProductTitle = styled.h5`
  grid-row-start: 1;
  grid-row-end:1;
  grid-column: 1 / span 2;
`;

export const Img = styled.img`
  height: 150px;
  width: 15opx;
  grid-row: 2 / span 6;
  grid-colum: 1 / span 1;
`; 



