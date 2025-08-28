import { useState, useEffect } from 'react';

import { Container } from '../../styled.global';
import Header from '../../components/header'
import Title from '../../components/Title';
import api from '../../api';

import {
    Form,
    ContainerAddMusic,
    SelectMusicContainer
} from './styled'

export default function CreateOrUpdateEvent() {

    const [loadingPage, setLoadingPage] = useState(true);

    const [data, setData] = useState([])
    const [musics, setMusics] = useState([]);
    const [levites, setLevites] = useState([]);
    const [checkedOferta, setCheckedOferta] = useState({});

    const categories = ["Celebração", "Adoração", "Oferta"];

    const [filterMusic, setFilterMusic] = useState({
        title: '',
        id_category: undefined
    })

    useEffect(() => {
        (async () => {
            try {
                const [levites, categories, musics] = await Promise.all([
                    api.get('/levites'),
                    api.get('/categories'),
                    api.get('/musics')
                ])
                setData({
                    levites: levites.data,
                    categories: categories.data,
                    musics: musics.data
                })
            } catch (err) {
                alert(err.response.data)
            }
            setLoadingPage(false)
        })()
    }, [])

    async function handleFilterMusics() {
        try {

            const res = await api.get('/musics', {
                params: {
                    title: filterMusic.title,
                    id_category: filterMusic.id_category || undefined
                }
            })

            const { musics, ...rest } = data
            setData({
                ...rest,
                musics: res.data,
            })

        } catch (err) {
            console.log(err.response.data)
        }
    }

    function toggleOferta(id) {
        setCheckedOferta(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    //ACTION TO ADD OR DELETE MUSICS LIST
    function handleAddMusicList(music) {
        const isOferta = checkedOferta[music.id] || false;
        let newMusic = {
            id_music: music.id,
            name: music.title,
            name_category: music.Categories.name,
            url: music.url_image,
            order: 0
        }

        if (isOferta) {
            newMusic = {
                ...newMusic,
                id_category: data.categories.filter(category => category.name === 'Oferta')[0].id,
                name_category: data.categories.filter(category => category.name === 'Oferta')[0].name
            }
        }

        setMusics(prev => ([
            ...prev,
            newMusic
        ]))
    }

    if (loadingPage) { return <p>Carregando Informacoes</p> }

    return (
        <>
            <Header name="Escala" />
            <Container>
                <Title btnback={true} title="Cadastrar novo evento" />
                <Form>
                    <input type="text" placeholder='Digite o nome' />
                    <input type="date" />
                    <textarea placeholder='Observacao'></textarea>

                    <ContainerAddMusic>
                        <div id='div-container-music-seach'>
                            <div id='divSearch'>
                                <input
                                    value={filterMusic.title}
                                    onChange={e => setFilterMusic({ ...filterMusic, title: e.target.value })}
                                    type="text"
                                    placeholder='Nome do louvo' />
                                <select
                                    value={filterMusic.id_category}
                                    onChange={e => setFilterMusic({ ...filterMusic, id_category: e.target.value })}
                                >
                                    <option value="">Todos</option>
                                    {data.categories
                                        .filter(category => category.name !== 'Oferta')
                                        .map((category) => {
                                            return (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            )
                                        })}
                                </select>

                                <button type='button' onClick={() => handleFilterMusics()}>Pesquisar</button>
                            </div>
                            {data.musics.map((music) => {
                                return (
                                    <div key={music.id}>
                                        <img src={music.url_image} alt={`imagem-da-musica-${music.title}`} />
                                        <a target='_blank' href={`https://www.youtube.com/watch?v=${music.id_youtube}`}>{music.title}</a>

                                        <div id='containerbtn'>
                                            {music.Categories.name === "Celebração" && (
                                                <>
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedOferta[music.id] || false}
                                                        onChange={() => toggleOferta(music.id)}
                                                    />Oferta
                                                </>
                                            )}
                                            <button type='button' onClick={() => handleAddMusicList(music)}>Adicionar</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div id='div-container-music'>
                            {categories.map(cat => (
                                musics
                                    .filter(music => music.name_category === cat)
                                    .map(music => (
                                        <SelectMusicContainer key={music.id_music}>
                                            <div>
                                                <img src={music.url} alt={`imagem-da-musica-${music.name}`} />
                                                <p>{music.name}</p>
                                            </div>

                                            <div>
                                                <p>{music.name_category}</p>
                                                <button>Delete</button>
                                            </div>
                                        </SelectMusicContainer>
                                    ))
                            ))}
                        </div>
                    </ContainerAddMusic>

                </Form>
            </Container>
        </>
    )
}