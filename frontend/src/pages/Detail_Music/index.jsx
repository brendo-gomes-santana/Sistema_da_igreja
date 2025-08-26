import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styled.global';
import Header from '../../components/header';
import Title from '../../components/Title';
import api from '../../api';

import image_Cifra from "../../assets/icon_cifraClub.png"

import {
    ContainerMusic
} from './styled'

export default function DetailMusic() {



    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();
    const navigate = useNavigate();
    const letra = "";

    useEffect(() => {
        (async() => {
            try {
                const res = await api.get(`/music/${id}`);
                setData(res.data)
            } catch (err) {
                alert(err.response.data.message)
                navigate(-1)
            }

            setLoading(false);
        })()
    }, [])

    if (loading) { return <h1>Carregando Musica...</h1> }

    return (
        <>
            <Header />
            <Container>
                <Title title={data.title} />

                <ContainerMusic>

                    <p>{data.letter}</p>

                    <div>
                        <iframe
                            src={`https://www.youtube.com/embed/${data.id_youtube}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>

                        <a target="_blank" href={data.link_CifraClub}>
                            <img src={image_Cifra} alt="icon-cifra-club" />
                        </a>

                    </div>
                </ContainerMusic>

            </Container>
        </>
    )
}