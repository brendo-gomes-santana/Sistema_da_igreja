
import {

    Container

} from "./styled"

export default function PageLoading({ title }){
    return(
        <Container>
            <span id="loader"></span>
            <p>{title || 'Carregando informação...'}</p>
        </Container>
    )
}