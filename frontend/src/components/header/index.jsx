import { useState } from "react";

import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import {
    Container,
    ContainerLink
} from './styled'

export default function Header() {

    const [open, setOpen] = useState(false);

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

            <h1>Escalas</h1>

            <ContainerLink open={open} >
                <Link to="/painel">Escalas</Link>
                <Link to="/musicas">Musicas</Link>
                <Link to="/levitas">Levitas</Link>

                <button>
                    <MdExitToApp /> Deslogar
                </button>
            </ContainerLink>
        </Container>
    )
}