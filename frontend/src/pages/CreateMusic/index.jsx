import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import api from '../../api';

import { Container } from '../../styled.global';
import Header from '../../components/header';
import Title from '../../components/Title';

import iconYoutube from '../../assets/icon_youtube.png'
import iconCifra from '../../assets/icon_cifraClub.png'
import iconLetras from '../../assets/icon_letras.png'

import {
    Form,
    SearchYoutube,
    ListMusicsYoutube,
    CardMusic,
    ContainerInfor
} from './styled.js'

export default function CreateMusic() {

    const [dataYoutube, setDataYoutube] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    const { handleSubmit, register, getValues, setValue, reset } = useForm();


    async function handleSearchYoutube() {

        try {
            const res = await axios('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: "snippet",
                    type: "video",
                    q: getValues().title,
                    key: import.meta.env.VITE_API_YOUTUBE
                }
            })

            setDataYoutube(res.data.items)
        } catch (err) {
            console.error(err.response)
        }
    }
    function HandleAddInfor(data) {

        setValue('title', data.snippet.title)
        setValue('url_image', data.snippet.thumbnails.high.url)
        setValue('id_youtube', data.id.videoId)

    }
    async function handleCreateNewMusic(data) {

        try {
            await api.post('/music', data)
            alert(`Musica ${data.title} cadastro com sucesso`)
            reset()
            setDataYoutube([])
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    useEffect(() => {
        (async () => {
            try {

                const res = await api.get('/categories')
                setCategories(res.data.filter(category => category.name != 'Oferta'))

            } catch (err) {
                alert(err.response.data.message)
            }
            setLoading(false);
        })()
    }, [])


    if (loading) { return <h1>Carregando informacoes</h1> }


    return (
        <>
            <Header />
            <Container>
                <Title
                    btnback={true}
                    title="Cadastrar nova Música"
                />
                <ContainerInfor>
                    <p>
                        Para cadastrar uma nova música, digite o nome da música e clique no ícone do YouTube.
                        Será exibida uma lista de músicas encontradas. Clique em Adicionar e as informações
                        principais (nome e outros dados) serão preenchidas automaticamente no formulário.
                    </p>
                    <p>
                        Para inserir o link da cifra e a letra, clique nos ícones correspondentes. Você será
                        direcionado para as páginas oficiais. Copie o link da cifra e cole no campo apropriado,
                        depois copie toda a letra do site Letras e cole no formulário.
                    </p>
                </ContainerInfor>


                <Form onSubmit={handleSubmit(handleCreateNewMusic)}>
                    <input
                        {...register('title')}
                        type="text"
                        placeholder='Nome do Louvor' />
                    <input
                        {...register('link_CifraClub')}
                        type="text"
                        placeholder='Link do Cifra club' />
                    <input
                        {...register('url_image')}
                        type="text"
                        placeholder='Url da Imagem' />
                    <input
                        {...register('id_youtube')}
                        type="text"
                        placeholder='ID do youtube' />
                    <select {...register('id_category')}>
                        <option value="">Selecione a categoria</option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })}
                    </select>
                    <textarea {...register('letter')}></textarea>
                    <button>Cadastrar</button>
                </Form>

                <SearchYoutube type="button" onClick={() => handleSearchYoutube()}>
                    <img src={iconYoutube} alt="icon-youtube" />
                </SearchYoutube>
                <ListMusicsYoutube>
                    {dataYoutube?.map((item) => {
                        return (
                            <CardMusic key={item.id.videoId}>
                                <figure>
                                    <img src={item.snippet.thumbnails.high.url} alt={`Imagem-${item.snippet.title}`} />
                                    <p>{item.snippet.title}</p>
                                </figure>
                                <div>
                                    <a target='_blank' href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                                        <img src={iconYoutube} alt="icon-Youtube" />
                                    </a>
                                    <a target='_blank' href={`https://www.cifraclub.com.br/?q=${item.snippet.title}&gsc.page=1`}>
                                        <img src={iconCifra} alt="icon-cifra-club" />
                                    </a>
                                    <a target='_blank' href={`https://www.letras.mus.br/?q=${item.snippet.title} - ${item.snippet.channelTitle}`}>
                                        <img src={iconLetras} alt="icon-letras" />
                                    </a>
                                    <button onClick={() => HandleAddInfor(item)}>Adicionar</button>
                                </div>

                            </CardMusic>
                        )
                    })}

                </ListMusicsYoutube>
            </Container>
        </>
    )
}