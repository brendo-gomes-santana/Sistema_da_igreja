import { useContext } from "react"
import { AuthContext } from "../../context/auth"

export default function Auth({children}){

    const { token } = useContext(AuthContext)

    if(!token){ return null }

    return children
}