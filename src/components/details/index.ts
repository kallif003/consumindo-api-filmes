import styled from "styled-components"

export const ContainerDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 10rem ;
@media(min-width:300px) and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
export const DivDetails = styled.div`
color: #fff;
p {overflow-wrap: break-word;}
width: 350px;
margin-left: 2rem;
button {
    background-color: rgb(2 132 199);
    border-radius: 1rem;
    color: #fff;
    border-color: rgb(14 165 233);
    border-width: 3px;
    padding: 0.8rem 2rem;
    font-size: 100%;
    transform: scale(0.9);
    transition: all .3s;
    margin-left: -12px;
  }
@media(min-width:300px) and (max-width: 768px) {
  width: 280px;
  margin: 0 0 1rem 0;
}
`
export const Title = styled.h1``

export const Image = styled.img`
border-radius: 1rem;
width: 280px;
margin-bottom: 2rem;

`