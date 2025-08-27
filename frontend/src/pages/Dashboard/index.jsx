import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { format } from "date-fns";

import Header from "../../components/header"
import { Container } from "../../styled.global"

import api from '../../api'

import {
    LinkNewEvent,
    Cards
} from './styled'

export default function Dashboard() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {

                const res = await api.get('/events');
                setData(res.data);

            } catch (err) {
                alert(err.response.data.message);
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return (
        <>
            <Header name="Escalas"/>
            <Container style={{
                display:"flex",
                flexDirection: "column"
            }}>
                <LinkNewEvent to="/criar/event">Criar novo Escala</LinkNewEvent>
                <Cards>
                    {!loading && data.map((item) => {
                        return (
                            <Link to={`/escala/${item.id}`}>
                                <h2>{item.name}</h2>
                                <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
                            </Link>
                        )
                    })}
                </Cards>
            </Container>
        </>
    )
}