import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {Container} from './styles'
import { Head } from "../../components/Head/Head";
//context
import { Context } from "../../contexts/UserContext";

const Register = () => {
    const [user, setUser] = useState({});
    const {register}:any = useContext(Context);

    function handleChange(e:any){
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        register(user);
    }
  return (
    <Container>
        <Head title="Cadastrar usuário" description="Preencha os campos com seus dados para realizar o cadastro" />
        <h1>Cadastrar novo usuário</h1>
        <p>Preencha os campos com seus dados para realizar o cadastro!</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" onChange={(e)=>handleChange(e)} placeholder='Digite o seu nome' />
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" onChange={(e)=>handleChange(e)} placeholder="Digite o seu e-mail" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" onChange={(e)=>handleChange(e)} id="password" placeholder="Digite a sua senha" />
            <label htmlFor="confirmpassword">Confirmação de senha</label>
            <input type="password" name="confirmpassword" onChange={(e)=>handleChange(e)} id="confirmpassword" placeholder="Confirme a senha" />
            <button>Cadastrar</button>
        </form>
        <Link to="/">Já tem uma conta? Clique aqui para fazer o login!</Link>
    </Container>
  )
}

export default Register