import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    const [nameMusic, setNameMusic] = useState('');
    const [idCategory, setIdCategory] = useState('');

    const [dataMusics, setDataMusics] = useState([]);
    const [dataCategories, setDataCategories] = useState([])
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function handleSearchMusics(event) {
        event.preventDefault();

        const params = new URLSearchParams();

        if (nameMusic) params.set("name", nameMusic);
        if (idCategory) params.set("id_category", idCategory);

        const query = params.toString();
        navigate(query ? `?${query}` : "");
    }

    useEffect(() => {
        (async () => {
            setLoading(true);

            const name = searchParams.get("name") || undefined;
            const id_category = searchParams.get("id_category") || undefined;

            try {
                const [categories, musics] = await Promise.all([
                    api.get('/categories'),
                    api.get('/musics', {
                        params: { title: name, id_category }
                    })
                ]);

                setDataMusics(musics.data);
                setDataCategories(categories.data.filter(category => category.name !== 'Oferta'));
            } catch (err) {
                alert(err.response?.data?.message || "Erro ao buscar dados");
            }

            setLoading(false);
        })()
    }, [searchParams])

    if (loading) {
        return <h1>Carregando informações dos louvores...</h1>
    }

    return (
        <>
            <Header name="Musicas" />
            <Container>
                <Title 
                    link="/criar/musica"
                    title="Lista de Musicas" 
                    btncreate={true} 
                    namecreate="nova musica" 
                />
                <Form onSubmit={handleSearchMusics}>
                    <input
                        type="text"
                        placeholder="Nome do louvor"
                        value={nameMusic}
                        onChange={(e) => setNameMusic(e.target.value)}
                    />
                    <select
                        value={idCategory}
                        onChange={(e) => setIdCategory(e.target.value)}
                    >
                        <option value="">Todas</option>
                        {dataCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <button type='submit'>Pesquisar</button>
                </Form>

                <Cards>
                    {dataMusics.map((music) => (
                        <Card key={music.id}>
                            <figure onClick={() => navigate(`/musica/${music.id}`)}>
                                <img src={music.url_image} alt={`imagem-da-musica-${music.title}`} />
                                <figcaption>{music.title}</figcaption>
                            </figure>
                            <div>
                                <a target='_blank' href={`https://www.youtube.com/watch?v=${music.id_youtube}`}>
                                    <img src={iconYoutube} alt="logo-youtube" />
                                </a>
                                <a target='_blank' href={music.link_CifraClub}>
                                    <img src={iconCifra} alt="logo-cifra-club" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </Cards>
            </Container>
        </>
    )
}
