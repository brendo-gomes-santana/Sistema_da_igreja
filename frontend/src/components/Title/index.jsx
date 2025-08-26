import { Link } from "react-router-dom"
import { format } from "date-fns"
import { Container } from "./styled"

export default function Title({ title, date }) {
    return (
        <Container>
            <Link to={-1}>Volta</Link>
            <h1>{title}</h1>
            {date && (
                <p>{format(new Date(date), "dd/MM/yyyy")}</p>
            )}
        </Container>
    )
}