import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RiAddLargeLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';

import { Container } from "../../styled.global"
import Header from "../../components/header"
import Title from "../../components/Title"
import api from "../../api"

import {
    FormAddMusic,
    ListMusics
} from './styled'

export default function UpdateEvent() {

    const [data, setData] = useState({
        event: {},
        musics: [],
        categories: []
    });
    
    const [loading, setLoading] = useState(true);
    const [openCheckout, setOpenCheckout] = useState(false);

    const { id } = useParams();
    const { handleSubmit, register } = useForm();

    const categories = ["Celebração", "Adoração", "Oferta"];

    async function handleAddMusic(data) {
        const body = {
            order: 0,
            id_event: id,
            id_music: data.id_music,
            ...(data.id_category ? { id_category: data.id_category } : {})
        };

        try {
            const res = await api.post('/event/music', body);
            const newMusic = res.data

            setData(prev => ({
                ...prev,
                event: {
                    ...prev.event,
                    musics: [
                        ...prev.event.musics,
                        newMusic
                    ]
                }
            }))

            console.log(res.data);
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    async function handleDeleteMusic(id) {

        try {

            await api.delete(`/event/music/${id}`)

            const listMusics = data.event.musics.filter((music) => music.id !== id);

            setData(prev => ({
                ...prev,
                event: {
                    ...prev.event,
                    musics: listMusics
                }
            }))

        } catch (err) {
            alert(err.response.data.message);
        }

    }

    function handleSelectLouvor(e) {
        const id = e.target.value

        const SelectMusic = data.musics.find((music) => music.id === id);

        if (SelectMusic.Categories.name === 'Celebração') {
            setOpenCheckout(true)
        } else {
            setOpenCheckout(false);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const [categories, musics, event] = await Promise.all([
                    api.get('/categories'),
                    api.get('/musics'),
                    api.get(`/event/${id}`)
                ])


                setData({
                    event: event.data,
                    musics: musics.data,
                    categories: categories.data
                })

            } catch (err) {
                alert(err.response.data.message)
            }

            setLoading(false)

        })()
    }, [])

    if (loading) { return <h1>Carregando informacoes</h1> }



    return (
        <>
            <Header name="Evento" />
            <Container>
                <Title title={data?.event.name} btnback={true} />
                <FormAddMusic onSubmit={handleSubmit(handleAddMusic)}>
                    <select {...register('id_music')} onChange={(e) => handleSelectLouvor(e)}>
                        <option value="">Selecione o louvor</option>
                        <optgroup label="Celebração">
                            {data.musics
                                .filter((music) => music.Categories.name === 'Celebração')
                                .map((music) => {
                                    return (
                                        <option value={music.id} key={music.id}>{music.title}</option>
                                    )
                                })}
                        </optgroup>
                        <optgroup label="Adoração">
                            {data.musics
                                .filter((music) => music.Categories.name === 'Adoração')
                                .map((music) => {
                                    return (
                                        <option
                                            value={music.id}
                                            key={music.id}>
                                            {music.title}
                                        </option>
                                    )
                                })}
                        </optgroup>
                    </select>
                    {openCheckout && (
                        <div>
                            <input
                                type="checkbox"
                                value={data.categories.find((category) => category.name === 'Oferta').id}
                                {...register('id_category')}
                            />
                            Oferta
                        </div>
                    )}

                    <button type="submit">
                        <RiAddLargeLine size={40} />
                    </button>
                </FormAddMusic>

                <ListMusics>
                    {categories.map((category) => (
                        data.event.musics
                            .filter((music) => music.category.name === category)
                            .map((music) => {
                                return (
                                    <div key={music.id}>
                                        <a href={`https://www.youtube.com/watch?v=${music.id_youtube}`} target="_blank">
                                            {music.name}
                                        </a>
                                        <span>
                                            <p>{music.category.name}</p>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteMusic(music.id)}
                                            >
                                                Delete
                                            </button>
                                        </span>
                                    </div>
                                )
                            })
                    ))}

                </ListMusics>
            </Container>
        </>
    )
}