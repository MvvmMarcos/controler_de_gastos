import styled from "styled-components";

export const Container = styled.div`
background: #DDD;
height: 100vh;
width: 100%;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}
div h1{
    margin-bottom: 20px;
    color: #222;
    font-size: 40px;
}
div a{
    font-size: 18px;
    color: #20A4F3;
    font-weight: bold;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s;
}
div a:hover{
    background: #CCC;
}

`