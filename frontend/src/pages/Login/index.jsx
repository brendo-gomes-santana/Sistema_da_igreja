import { useForm } from 'react-hook-form';
import { zodRevolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import {
    Form,
    Label
} from "./styled"
import fundo from '../../assets/fundo.jpg'
import { Container } from "../../styled.global"

export default function Login() {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    async function handleLogin(data){
        try{

        }catch(err){

        }
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
            <Form>
                <section>
                    <h1>Login</h1>
                </section>

                <Label>Email
                    <input type="text" />
                </Label>

                <Label>Senha
                    <input type="password" />
                </Label>

                <button>Entrar</button>
            </Form>
        </Container>
    )
}