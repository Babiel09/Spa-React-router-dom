import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao';
import Header from '../../components/Header';
import RostoMoca from '../../assets/home-image.png';


export default function PaginaPrincipal(){
    const navigate = useNavigate();
    return(
    <>
        <Header/>
        <div>
            <h1>Boas-vindas ao seu refúgio de paz e bem-estar</h1>
            <br />
            <div>
                <Botao
                nome='Quero Relaxar!'
                onClick={()=> navigate('/serviços')}
                ></Botao>  
            </div>
            <div>
                <img src={RostoMoca} alt="Moça sendo massagiada" />
            </div>
            </div>
        </>
    );
    
}