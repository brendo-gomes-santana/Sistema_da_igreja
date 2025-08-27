import { Link } from "react-router-dom"
import { format } from "date-fns"
import { Container } from "./styled"
import Auth from '../Auth';

export default function Title({ title, date, btnback, btncreate, namecreate }) {
    return (
        <Container>

            {btnback && (<Link to={-1}>Volta</Link>)}

            <h1>{title}</h1>
            {date && (
                <p>{format(new Date(date), "dd/MM/yyyy")}</p>
            )}
            
            <Auth>
                {btncreate && (
                    <Link style={{ marginLeft: "auto" }}>Cadastrar {namecreate}</Link>
                )}
            </Auth>

        </Container>

    )
}