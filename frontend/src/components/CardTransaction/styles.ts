import styled from "styled-components";
interface ContainerProps{
    typeColor:boolean
}
export const Card = styled.div<ContainerProps>`
background-color: #fff;
/* padding: 10px; */
border-radius: 8px;
box-shadow: 2px 2px 5px #555;
h3{
    text-align: center;
    background-color: ${props => props.typeColor ? "#f4dbdd":"#dbfffb"};
    color: ${props => props.typeColor ? "#FD3500" : "#1B42BD"};
    padding-bottom: 5px;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 10px;
}
div{
    padding: 10px;
}
ul{
    list-style: none;
}
li{
    color: #222;
    padding-left: 10px;
    padding-bottom: 4px;
}
li:last-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    button, a{
        border: none;
        padding: 6px 8px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
    }
    a{
        background: #7cd164;
        color: #555;
        opacity: 0.6;
    }
    a:hover{
        color: #FFF;
        opacity: 1;
    }
    button:last-child{
        background: #FD3500;
        color: #222;
        opacity: 0.6;
    }
    button:last-child:hover{
        color: #FFF;
        opacity: 1;
    }
}
`