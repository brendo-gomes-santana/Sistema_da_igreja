import { useState, useEffect } from "react"

import Header from "../../components/header"
import { Container } from "../../styled.global"
import Title from "../../components/Title"
import api from "../../api"
export default function CreateNewLevite() {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('/types');
                setData(res.data);

            } catch (err) {
                alert(err.response.data.message);
            }
        })()
    }, [])
    console.log(data);
    return (
        <>
            <Header name="Levita" />
            <Container>
                <Title title="Cadastrar novo Levita" btnback={true} />
                <form>
                    <input type="text" placeholder="Nome do levita" />
                    <div>
                        {data.map((item) => {
                            return (
                                <>
                                    <input type="checkbox" value={item.id} /> {item.name}
                                </>
                            )
                        })}
                    </div>
                </form>
            </Container>
        </>
    )
}