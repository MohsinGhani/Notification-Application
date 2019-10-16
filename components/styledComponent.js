import styled from 'styled-components'

export const Title = styled.span`
font-weight: 600
`
export const UnorderList = styled.ul`
list-style-type: none;
padding: 0px;
`
export const List = styled.li`
display: -webkit-box;
padding: 1rem 1rem;
list-style: none;
border-bottom: 1px solid #CDCDCD;
`
export const LeftImage = styled.div`
width: 3rem;
grid-column: auto;
-m-flex-preferred-size: auto;
flex-basis: auto;
webkit-box-flex: 0;
ms-flex-positive: 0;
flex-grow: 0;
ms-flex-negative: 0;
flex-shrink: 0;
ms-grid-row: 1;
grid-row: 1;
margin: 0 1rem 0 0;
`
export const Image = styled.img` 
  display: inline-block;
  vertical-align: middle;
  height: 3rem;
  width: 3rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;
  max-width: 100%;
`
export const Wrapper = styled.div`
 margin : -8px;
`;
export const UserContent = styled.div`
-ms-flex-preferred-size: auto;
-flex-basis: auto;
-webkit-box-flex: 1;
ms-flex-positive: 1;
flex-grow: 1;
ms-flex-negative: 1;
flex-shrink: 1;
ms-grid-row: 1;
grid-row: 1;
transform: translate(5p 5px);
grid-column: span 9;
`;
export const UserInfo = styled.p`
margin: 0.15rem 0 0
` 
export const Time = styled.p`
margin: 0;
color: #9da4ae;
` 