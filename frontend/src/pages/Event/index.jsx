import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Title from "../../components/Title";
import { Container } from "../../styled.global"
import Header from "../../components/header"
import api from "../../api";

import iconYoutube from '../../assets/icon_youtube.png'
import iconCifra from '../../assets/icon_cifraClub.png'

import {
    Cards,
    List
} from './styled'

export default function Event() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get(`/event/${id}`)
                setData(res.data)
            } catch (err) {
                alert(err.response.data.message);
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    if (loading) { return <p>Carregando Informaçoes...</p> }

    return (
        <>
            <Header />
            <Container>
                <Title title={data.name} date={data.date} />
                <Cards>
                    <p>{data.observation}</p>
                </Cards>

                <Cards>
                    <h2>Banda</h2>
                    <hr />
                    <ul>
                        {data.levites.map((item) => {
                            return (
                                <li key={item.id}>{item.name} ( {item.function} )</li>
                            )
                        })}
                    </ul>
                </Cards>

                <Cards>
                    <h2>Louvores</h2>
                    <hr />
                    <ul>
                        <li>
                            <strong>Celebração</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Celebração")
                                    .map(item => (
                                        <List key={item.id}>
                                            <a href={`/musica/${item.id_music}`}>{item.name}</a>
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </List>
                                    ))}
                            </ul>
                        </li>

                        <li>
                            <strong>Adoração</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Adoração")
                                    .map(item => (
                                        <List key={item.id}>
                                            <a href={`/musica/${item.id_music}`}>{item.name}</a>
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </List>
                                    ))}
                            </ul>
                        </li>

                        <li>
                            <strong>Oferta</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Oferta")
                                    .map(item => (
                                        <List key={item.id}>
                                            <a href={`/musica/${item.id_music}`}>{item.name}</a>
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </List>
                                    ))}
                            </ul>
                        </li>
                    </ul>
                </Cards>
            </Container>
        </>
    )
}