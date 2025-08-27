import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import api from '../../api';
import Header from "../../components/header"
import Title from "../../components/Title"
import { Container } from "../../styled.global"

import iconYoutube from '../../assets/icon_youtube.png'
import iconCifra from '../../assets/icon_cifraClub.png'

import {
    Form,
    Card,
    Cards
} from './styled'

export default function ListMusic() {

    const [dataMusics, setDataMusics] = useState([]);
    const [dataCategories, setDataCategories] = useState([])
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {

                const [categories, musics] = await Promise.all([
                    api.get('/categories'),
                    api.get('/musics')
                ])
                setDataMusics(musics.data);
                setDataCategories(categories.data.filter(category => category.name !== 'Oferta'));

            } catch (err) {
                alert(err.response.data.message)
            }

            setLoading(false);
        })()
    }, [])

    if (loading) { return <h1>Carregando informacoes dos louvores</h1> }
    
    return (
        <>
            <Header name="Musicas" />
            <Container>
                <Title title="Lista de Musicas" btncreate={true} namecreate="nova musica" />
                <Form>
                    <input type="text" placeholder="Nome do louvor" />
                    <select>
                        <option value="">Selecione a Categoria</option>
                        {dataCategories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })}
                    </select>
                    <button>Pesquisar</button>
                </Form>

                <Cards>
                    {dataMusics.map((music) => {
                        return (
                            <Card key={music.id}>
                                <figure onClick={() => {
                                    navigate(`/musica/${music.id}`)
                                }}>
                                    <img src={music.url_image} alt={`imagem-da-musica-${music.title}`} />
                                    <figcaption>{music.title}</figcaption>
                                </figure>
                                <div>
                                    <a target='_blank' href={"https://www.youtube.com/watch?v=" + music.id_youtube}>
                                        <img src={iconYoutube} alt="logo-cifra-club" />
                                    </a>
                                    <a target='_blank' href={music.link_CifraClub}>
                                        <img src={iconCifra} alt="logo-cifra-club" />
                                    </a>
                                </div>
                            </Card>
                        )
                    })}

                </Cards>
            </Container>

        </>

    )
} 