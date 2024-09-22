import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao';

export default function Contato(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Essa página é apenas um teste</h1>
            <div>
                <Botao
                onClick={()=> navigate('/')}
                nome="< Voltar"
                />
            </div>
        </div>
    )
}