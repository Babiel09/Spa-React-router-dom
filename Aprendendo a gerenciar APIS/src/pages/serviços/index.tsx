import { useNavigate } from "react-router-dom";
import Botao from "../../components/Botao";
import ParteFinal from "../../components/parte-final";
import styles from './servicos.module.scss';
import Header from "../../components/Header";



export default function Serviços(){
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <div className={styles.containerServico}>
            <ParteFinal/>
            </div>
            <div>
            </div>
            </>
    )

}