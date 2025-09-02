import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";

import Header from "../../components/header"
import { Container } from "../../styled.global"
import Auth from '../../components/Auth';
import api from '../../api'

import {
    LinkNewEvent,
    Cards,
    Card
} from './styled'

export default function Dashboard() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function handleSendWhatsApp(id){
        try{

            await api.post(`/send-whatsapp/${id}`);
            alert('Mensagem enviado com sucesso')

        }catch(err){
            alert(err.response.data.message)
        }
    }

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
            <Header name="Escalas" />
            <Container style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Auth>
                    <LinkNewEvent to="/criar/event">Criar novo Escala</LinkNewEvent>
                </Auth>
                <Cards>
                    {!loading && data.map((item) => {
                        return (
                            <Card key={item.id}>
                                <Link to={`/escala/${item.id}`}>
                                    <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
                                    <h2>{item.name}</h2>
                                </Link>
                                <div>
                                    <Link to={`/atualizar/evento/${item.id}`}>
                                        <MdEditSquare size={50} />
                                    </Link>
                                    <button onClick={()=> handleSendWhatsApp(item.id)}>
                                        <FaSquareWhatsapp size={50} color="#4BF289"/>
                                    </button>
                                    <button onClick={() => { console.log('testo') }}>
                                        <RiDeleteBinFill size={50} color="#F57065"/>
                                    </button>
                                </div>
                            </Card>
                        )
                    })}
                </Cards>
            </Container>
        </>
    )
}