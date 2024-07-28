import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../contexts/UserContext";
import { Nav } from "./styles";

const Navbar = () => {
    const {logout}:any = useContext(Context);

  return (
    <Nav>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/transaction-register'>Cadastrar transação</Link>
            </li>
            <li onClick={logout}>Sair</li>
        </ul>
    </Nav>
  )
}

export default Navbar