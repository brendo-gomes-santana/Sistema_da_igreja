import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoAddOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { Container } from '../../styled.global';
import api from '../../api'
import Header from '../../components/header'
import Title from '../../components/Title'

import {
    CreateLink
} from './styled'

export default function UpdateMusic() {

    const { id } = useParams();
    const navigate = useNavigate();



    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [newLinks, setNewLinks] = useState([]);

    const [link, setLink] = useState('');
    const [instrument, setInstrument] = useState('');

    // ADD NEW LINK IN ARRAY - LOCAL
    function handleAddNewLink() {

        if (link === '' || instrument === '') {
            alert('Faltou o link ou seleciona o instrumento');
            return
        }

        const type = data.types.find(type => type.id === instrument);

        setNewLinks(prev => ([
            ...prev,
            {
                link,
                id_music: data.music.id,
                id_type: instrument,
                name: type.name
            }
        ]))

        setLink('')
    }

    // ADD NEW LINKS IN BACKEND
    async function handleCreateNewLink(e){
        e.preventDefault();
        if(newLinks.length === 0){
            alert('Voce nao colocou nem um link novo')
            return
        }
        try{
            const res = await api.post('/links', {
                links: newLinks
            })
            console.log(res);
            alert('cadastrado com sucesso')
        }catch(err){
            alert(err.response.data.message);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const [types, music] = await Promise.all([
                    await api.get('/types'),
                    await api.get(`/music/${id}`),

                ])


                setData({
                    types: types.data,
                    music: music.data
                })

            } catch (err) {
                navigate(-1);
            }

            setLoading(false);
        })()
    }, [id])

    if (loading) { return <h1>Carregando informacoes...</h1> }
    console.log(data);
    return (
        <>
            <Header name="Música" />
            <Container>
                <Title
                    btnback={true}
                    title={data.music.title}
                />
                <CreateLink onSubmit={handleCreateNewLink}>
                    <h2>Atualizar Links</h2>
                    <hr />
                    <div>
                        <input
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            type="text"
                            placeholder='url da aula' />
                        <select value={instrument} onChange={e => setInstrument(e.target.value)}>
                            <option value="">Selecione o instrumento</option>
                            {data.types.map((type) => {
                                return (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                )
                            })}

                        </select>
                        <button type='button' onClick={() => handleAddNewLink()}>
                            <IoAddOutline size={40} />
                        </button>
                    </div>
                    <div id='container-links'>
                        {newLinks.map((link) => {
                            return (
                                <span key={link.link}>
                                    <a target='_blank' href={link.link}>
                                        {link.name}
                                    </a>
                                    <button>
                                        <AiFillDelete size={20}/>
                                    </button>
                                </span>

                            )
                        })}
                    </div>

                    <button type='submit'>Salvar links</button>
                </CreateLink>
            </Container>
        </>
    )
}