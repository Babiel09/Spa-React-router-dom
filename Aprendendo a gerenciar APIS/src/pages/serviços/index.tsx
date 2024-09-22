import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao';

export default function Serviços(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Essa parte foi feita para não ter nada, apenas para existir</h1>
            <div>
                <Botao
                onClick={()=> navigate('/')}
                nome="< Voltar"
                />
            </div>
        </div>
    )
}