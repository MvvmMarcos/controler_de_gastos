import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {Container} from './styles';
//components
import { Head } from '../../components/Head/Head';
//context
import { Context } from '../../contexts/UserContext';
const Login = () => {
  const [user, setUser] = useState({});

  const {login}:any = useContext(Context);

  const handleChange = (e:any)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    login(user)
  }
  return (
    <Container>
        <Head title='Login' description='Faça o login para acessar suas transações'/>
        <h1>Login</h1>
        <p>Preencha os campos com os seus dados para fazer o login!</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" onChange={(e)=>handleChange(e)} placeholder="Digite o seu e-mail" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" onChange={(e)=>handleChange(e)} id="password" placeholder="Digite a sua senha" />
            <button>Entrar</button>
        </form>
        <Link to="/register">Não tem uma conta? Clique aqui para fazer o cadastro!</Link>
        
    </Container>
  )
}

export default Login