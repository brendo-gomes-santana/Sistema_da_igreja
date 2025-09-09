import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '../../styled.global';
import Header from '../../components/header'
import Title from '../../components/Title';
import api from '../../api';

import PageLoading from '../../components/PageLoading';

import {
    Form,
    ContainerAddLevites,
    ContainerAddMusic,
    SelectMusicContainer
} from './styled'

export default function CreateEvent() {

    const [loadingPage, setLoadingPage] = useState(true);

    const [data, setData] = useState([])
    const [musics, setMusics] = useState([]);
    const [levites, setLevites] = useState([]);
    const [checkedOferta, setCheckedOferta] = useState({});
    const [levite, setLevite] = useState({});
    const [type, setType] = useState('');
    const [filterMusic, setFilterMusic] = useState({
        title: '',
        id_category: undefined
    })

    const categories = ["Celebração", "Adoração", "Oferta"];

    const { handleSubmit, register, reset } = useForm();
    
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
    function handleDeleteMusicList(id_music) {
        const list = musics.filter(item => item.id_music !== id_music);
        setMusics(list);
    }

    //ACTION TO ADD OR DELETE LEVITE LIST AND SELECT TOO
    function handleSelectedLevite(e) {
        const leviteId = e.target.value;
        const leviteInfor = data.levites.filter(levite => levite.id === leviteId)[0];
        setLevite(leviteInfor)
    }
    function handleAddLeviteList() {

        const newLevite = {
            id_type: type,
            instrument: levite.types.filter(item => item.id === type)[0].name,
            name: levite.name,
            id_levite: levite.id
        }

        setLevites(prev => ([
            ...prev,
            newLevite
        ]))
    }
    function handleDeletLeviteList(id_levite){
        const newList = levites.filter(levite => levite.id_levite !== id_levite);
        setLevites(newList);
    }

    //ACTION CREATE NEW EVENT
    async function handleCreateNewEvent(data){
        console.log(data);

        const body = {
            levitas: levites,
            musics: musics,
            ...data

        }

        try{
            const res = await api.post('/event', body);
            console.log(res.data);
            reset()
        }catch(err){
            alert(err.response.data.message)
        }
    }

    if (loadingPage) { return <PageLoading/> }

    return (
        <>
            <Header name="Escala" />
            <Container>
                <Title btnback={true} title="Cadastrar novo evento" />
                <Form onSubmit={handleSubmit(handleCreateNewEvent)}>
                    <input 
                        type="text" 
                        placeholder='Digite o nome' 
                        {...register('name')}/>
                    <input type="date" {...register('date')} />
                    <textarea placeholder='Observacao' {...register('observation')}></textarea>
                    <ContainerAddLevites>
                        <div id='search-levite'>
                            <select onChange={handleSelectedLevite}>
                                <option value="">Selecione o levita</option>
                                {data.levites.map((levite) => {
                                    return (
                                        <option key={levite.id} value={levite.id}>{levite.name}</option>
                                    )
                                })}
                            </select>
                            <select value={type} onChange={e => setType(e.target.value)}>
                                <option value="">Selecione a funcao</option>
                                {levite.types?.map((type) => {
                                    return (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    )
                                })}
                            </select>
                            <button type='button' onClick={() => handleAddLeviteList()}>Cadastrar Levita</button>
                        </div>
                        <div id='list-levites'>
                            {levites.map((levite) => {
                                return (
                                    <div key={levite.id_levite}>
                                        <div>
                                            <p>
                                                <strong>{levite.name}</strong>
                                            </p>
                                            <p>{levite.instrument}</p>
                                        </div>
                                        <button type='button' onClick={() => handleDeletLeviteList(levite.id_levite)}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </ContainerAddLevites>
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
                            {musics.length != 0 && categories.map(cat => (
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
                                                <button type='button' onClick={() => handleDeleteMusicList(music.id_music)}>Delete</button>
                                            </div>
                                        </SelectMusicContainer>
                                    ))
                            ))}
                        </div>
                    </ContainerAddMusic>
                    <button id='btn-submit' type='submit'>Cadastrar evento</button>
                </Form>
            </Container>
        </>
    )
}