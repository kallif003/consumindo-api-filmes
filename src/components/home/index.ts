import styled from 'styled-components';

export const ContainerMovies = styled.div`
color: #fff;

`
export const Title = styled.h1`
text-align: center;
margin: 4rem 0;
color: #fff;
`
export const Ul = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 3rem;
row-gap: 4rem;
padding-right: 40px;
@media(min-width:300px) and (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
 
}
@media(min-width:769px) and (max-width: 1023px) {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5rem;
}
`
export const Li = styled.li`
display: flex;
flex-direction: column;
align-items: center;
transition: all 0.3s;
:hover {
   transform: scale(0.9);
  
}
`
export const Span = styled.span`
font-weight: bold;
font-size: 120%;
`

export const Image = styled.img`
border-radius: 1rem;
width: 280px;
margin-bottom: 2rem;
`
export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`