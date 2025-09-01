import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RiAddLargeLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';

import { Container } from "../../styled.global"
import Header from "../../components/header"
import Title from "../../components/Title"
import api from "../../api"

import {
    FormAddMusic
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

    async function handleAddMusic(data) {
        console.log(data);
    }

    function handleSelectLouvor(e) {
        const id = e.target.value
       
        const SelectMusic = data.musics.find((music) => music.id === id);
        
        if(SelectMusic.Categories.name === 'Celebração'){
            setOpenCheckout(true)
        }else{
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
            </Container>
        </>
    )
}