import styled from "styled-components";

export const Nav = styled.nav`
/* background: #DAB49D; */
background: #d9d9ed;
padding: 20px 25px;
box-shadow: 1px 1px 1px #ccc;
ul{
    display: flex;
    align-items: center;
    list-style: none;
}
li{
    margin-left: 12px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;

}
li a{
    color:#5E3023;
    /* color:#b2b3da; */
    padding: 8px;
    transition: 0.3s;
}
li:hover a{
    /* background: #F3E9DC; */
    background: #b2b3da;
    border-radius: 8px;
}
li:last-child{
    position: absolute;
    right: 25px;
    color: #f00;
    cursor: pointer;
    padding: 5px;
    border-radius: 8px;
    transition: 0.3s;
}
li:last-child:hover{
    /* background: #FF99B0; */
    background: #FFD9D9;
}
`