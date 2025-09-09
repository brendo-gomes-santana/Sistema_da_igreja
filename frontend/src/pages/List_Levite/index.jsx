import { useEffect, useState } from 'react';

import Header from '../../components/header';
import Title from '../../components/Title';
import Auth from '../../components/Auth';

import { Container } from '../../styled.global';
import api from '../../api';

import PageLoading from '../../components/PageLoading'

import {

    Card

} from './styled';

export default function ListLevite() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('/levites');
                setData(res.data);
            } catch (err) {
                alert(err.response.data.message);
            }
            setLoading(false)
        })()
    }, [])

    if (loading) { return <PageLoading/> }

    return (
        <>
            <Header name="Levitas"/>
            <Container>
                <Auth>
                    <Title
                        title="Lista de levitas"
                        namecreate="novo levita"
                        btncreate={true}
                        link="/criar/levita"

                    />
                </Auth>

                {data.map((item) => {
                    return (
                        <Card key={item.id}>
                            <h4>{item.name}</h4>
                            <div id='container-types'>
                                {item.types.map((type) => {
                                    return (
                                        <p key={type.id}>{type.name}</p>
                                    )
                                })}
                            </div>
                            <button disabled={true}>Deleta</button>
                        </Card>
                    )
                })}

            </Container>
        </>
    )
}