import styled from "styled-components";

export const Container = styled.div`
  display: grid; 
  place-items: center;  

`
export const SelectedCar = styled.img`
  width: 150px;
  height: 150px;
  grid-area: 'image'; 
`;

export const SelectedCarBox = styled.div`
  padding: 30px;
  display: grid;
  width: 500px; 
  grid-template-columns: 1fr 2fr; 
  grid-template-areas: 'image' 'descriptions'; 
  column-gap: 20px; 
  place-items: center; 
`
export const SelectedCarDes = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: center; 
  grid-area: 'descriptions'; 
  width: 300px; 
`

export const EachDes = styled.p`
  margin-top: 0px; 
  margin-bottom: 10px; 
  text-align: left; 
`