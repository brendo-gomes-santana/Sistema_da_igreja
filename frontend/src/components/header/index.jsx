import { useState, useContext } from "react";

import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { AuthContext } from "../../context/auth";

import {
    Container,
    ContainerLink
} from './styled'

export default function Header({ name }) {

    const [open, setOpen] = useState(false);

    const { handleLogOut, token } = useContext(AuthContext);

    return (
        <Container open={open}>
            <button

                onClick={() => setOpen(!open)}

                style={{
                    transform: `rotate(${open ? '180deg' : '0deg'})`,
                    transition: "all 0.2s"
                }}>
                <IoIosArrowForward size={40} />
            </button>

            <h1>{name}</h1>

            <ContainerLink open={open} >
                <Link to="/">Escalas</Link>
                <Link to="/musicas">Musicas</Link>
                
                {token && ( <Link to="/levitas">Levitas</Link> )}

                <div>
                    {token ? (
                        <button onClick={() => handleLogOut()}>
                            <MdExitToApp /> Deslogar
                        </button>
                    ) : (
                        <Link to="/login">
                            <FaUserAlt /> Entrar
                        </Link>
                    )}
                </div>
            </ContainerLink>
        </Container>
    )
}