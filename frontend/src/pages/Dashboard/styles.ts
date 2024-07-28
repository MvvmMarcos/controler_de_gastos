import styled from "styled-components";

export const Container = styled.main`
/* background: #F3E9DC; //bege*/
background: #ececf6;
min-height: 100vh;
h1{
    text-align: center;
    margin: 20px 0;
    color: #5E3023;
    text-transform: uppercase;
}
`
export const NoTransaction = styled.p`
display: flex;
align-items: center;
justify-content: center;
height: 50vh;

font-size: 22px;
color: #F06;
`
export const CardContainer = styled.div`
margin-top: 20px;
padding: 10px 40px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, auto));
gap: 1.75rem;
@media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`