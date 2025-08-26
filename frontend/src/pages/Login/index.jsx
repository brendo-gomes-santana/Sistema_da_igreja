import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import fundo from '../../assets/fundo.jpg'
import { Container } from "../../styled.global"
import api from '../../api';

import {
    Form,
    Label
} from "./styled"

export default function Login() {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    async function handleLogin(data) {
        try{
            const response = await api.post('/login', data);
            localStorage.setItem('token', response.data.token);
            navigate('/painel')
        }catch(err){
            alert(err.response.data.message);
        }

        setLoading(false)
    }

    return (
        <Container
            style={{
                backgroundImage: `url(${fundo})`,
                backgroundSize: "cover",

                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form onSubmit={handleSubmit(handleLogin)}>
                <section>
                    <h1>Login</h1>
                </section>

                <Label>Email
                    <input type="text" {...register('email')}/>
                </Label>

                <Label>Senha
                    <input type="password" {...register('password')}/>
                </Label>

                <button disabled={loading} type='submit'>
                    {loading ? 'Carregando...' : 'Entrar'}
                </button>
            </Form>
        </Container>
    )
}