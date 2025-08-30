import { useState, useEffect } from "react"

import Header from "../../components/header"
import { Container } from "../../styled.global"
import Title from "../../components/Title"
import api from "../../api"

import {
    Form,
    ContainerCheckbox
} from './styled'

export default function CreateNewLevite() {

    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

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

    function handleCheckbox(e) {
        const value = e.target.value

        const existId = list.find(type => type === value);

        if (existId) {
            const newList = list.filter(type => type !== value);
            setList(newList)
        } else {
            setList(prev => ([...prev, value]));
        }
    }

    async function handleCreateNewLivete(e){
        e.preventDefault();


        const body =  {
            name,
            types: list
        }
        try{
            await api.post('/levite',body);
            alert('Criado com sucesso')
        }catch(err){
            console.error(err);
            alert(err.response.data.message);
        }
    
        
    }

    return (
        <>
            <Header name="Levita" />

            <Container>
                <Title title="Cadastrar novo Levita" btnback={true} />
                <Form onSubmit={handleCreateNewLivete}>
                    <input

                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Nome do levita" />
                    <ContainerCheckbox>
                        {data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <input
                                        onChange={v => handleCheckbox(v)}
                                        type="checkbox"
                                        value={item.id} />
                                    {item.name}
                                </div>
                            )
                        })}
                    </ContainerCheckbox>
                    <button type="submit">Cadastrar Levita</button>
                </Form>
            </Container>
        </>
    )
}