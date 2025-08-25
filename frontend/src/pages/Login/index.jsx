
import {
    Form,
    Label
} from "./styled"

import { Container } from "../../styled.global"

export default function Login() {
    return (
        <Container>
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