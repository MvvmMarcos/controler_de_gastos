import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background: #F3E9DC; */
background: #ececf6;
margin: 0 auto;
    h1{
        color:#5E3023;
        margin-bottom: 10px;
        width: 500px;
    }
    p{
        font-size: 14px;
        width: 500px;
        padding: 10px 0;
        color: #0B5563;
        opacity: 0.6;
    }
    form{
        width: 500px;
        display: flex;
        flex-direction: column;
    }
    label{
        color: #5E3023;
        font-weight: bold;
        margin-bottom: 5px;
    }
    input{
        padding: 10px 12px;
        border: none;
        margin-bottom:4px;
        border-radius: 8px;
        color: #777;
        font-size: 16px;
    }
    button{
        padding: 10px 12px;
        color: #8CADA7;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        margin-top: 10px;
        background: #fff;
        font-size: 20px;
        transition: 0.3s;
        cursor: pointer;
    }
    button:hover{
        background: #8CADA7;
        color: #fff;
    }
    a{
       width:500px;
       color: #B7990D;
       padding-top: 10px;
       opacity: 0.6;
       transition: 0.3s;
    }
    a:hover{
        opacity: 1;
    }
`
export const Transaction = styled.div`
display: flex;
flex-direction: column;
div{
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
}
div label{
    margin: 0px 5px;
    color: #8CADA7;
}

div label span{
    margin-left: 5px;
}
input{
    margin-left: 10px;
    color: #B7990D;
}

`
export const TransactionDiv = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
select{
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    color: #777;
}

`
