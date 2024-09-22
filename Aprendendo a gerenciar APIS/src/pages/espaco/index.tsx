import Botao from "../../components/Botao";
import { useNavigate } from "react-router-dom";
export default function Espaço(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Essa página foi feita para não ter nada</h1>
            <div>
                <Botao
                onClick={()=> navigate('/')}
                nome="< Voltar"
                />
            </div>
        </div>
    )
}