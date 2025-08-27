import { useState, useEffect } from 'react';

import { Container } from '../../styled.global';
import Header from '../../components/header'
import Title from '../../components/Title';
import api from '../../api';

export default function CreateOrUpdateEvent() {

    const [loadingPage, setLoadingPage] = useState(true);

    const [data, setData] = useState([])
    const [musics, setMusics] = useState([]);
    const [levites, setLevites] = useState([]);

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

    if (loadingPage) { return <p>Carregando Informacoes</p> }



    return (
        <>
            <Header />
            <Container>
                <Title btnback={true} title="Cadastrar novo evento" />
                <form>
                    <input type="text" placeholder='Digite o nome' />
                    <input type="date" />
                    <textarea placeholder='Observacao'></textarea>

                    <article>
                        <div>
                            <div>
                                <input
                                    value={filterMusic.title}
                                    onChange={e => setFilterMusic({ ...filterMusic, title: e.target.value })}
                                    type="text"
                                    placeholder='nome do louvo' />
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
                                        <div>
                                            <input type="checkbox" />Oferta
                                        </div>
                                        <button>Adicionar</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div></div>
                    </article>

                </form>
            </Container>
        </>
    )
}