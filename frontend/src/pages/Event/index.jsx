import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Title from "../../components/Title";
import { Container } from "../../styled.global"
import Header from "../../components/header"
import api from "../../api";

import iconYoutube from '../../assets/icon_youtube.png'
import iconCifra from '../../assets/icon_cifraClub.png'
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
                <article>
                    <p>{data.observation}</p>
                </article>

                <article>
                    <h2>Banda</h2>
                    <hr />
                    <ul>
                        {data.levites.map((item) => {
                            return (
                                <li key={item.id}>{item.name} ( {item.function} )</li>
                            )
                        })}
                    </ul>
                </article>

                <article>
                    <h2>Louvores</h2>
                    <hr />
                    <ul>
                        <li>
                            <strong>Celebração</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Celebração")
                                    .map(item => (
                                        <li key={item.id}>
                                            {item.name}
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </li>

                        <li>
                            <strong>Adoração</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Adoração")
                                    .map(item => (
                                        <li key={item.id}>
                                            {item.name}
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </li>

                        <li>
                            <strong>Oferta</strong>
                            <ul>
                                {data.musics
                                    .filter(item => item.category.name === "Oferta")
                                    .map(item => (
                                        <li key={item.id}>
                                            {item.name}
                                            <div>
                                                <a target="_blank" href={item.link_cifra} >
                                                    <img src={iconCifra} alt="logo-cifra-club" />
                                                </a>
                                                <a target="_blank" href={"https://www.youtube.com/watch?v=" + item.id_youtube} >
                                                    <img src={iconYoutube} alt="logo-cifra-club" />
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    </ul>
                </article>
            </Container>
        </>
    )
}