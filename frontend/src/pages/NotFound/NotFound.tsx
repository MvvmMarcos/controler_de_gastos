import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles';
const NotFound = () => {
    return (
        <Container>
            <div>
                <h1>Página não encontrada!</h1>
                <Link to="/home">Clique aqui para voltar a home</Link>
            </div>
        </Container>
    )
}

export default NotFound