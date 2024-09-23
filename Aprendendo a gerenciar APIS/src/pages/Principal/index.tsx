import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao';
import Header from '../../components/Header';
import RostoMoca from '../../assets/home-image.png';
import styles from './paginaPrincipal.module.scss';
import FotoFuturista from '../../assets/espaco-1.png';
import imagemRelaxa1 from '../../assets/espaco-2.png';
import imagemRelaxa2 from '../../assets/espaco-3.png';

export default function PaginaPrincipal(){
    const navigate = useNavigate();
    return(
    <>
        <Header/>
        <section className={styles.home}>
            <div className={styles['text-container']}>
                <h1 className={styles.titulo1}>Boas-vindas ao seu refúgio de <span className={styles.span}>paz e bem-estar</span></h1>
                <div className={styles['button-container']}>
                    <Botao
                        nome='Quero Relaxar!'
                        onClick={()=> navigate('/serviços')}
                    />
                </div>
            </div>
            <div className={styles['image-container']}>
                <img src={RostoMoca} alt="Moça sendo massagiada" />
                <div className={styles['decorative-elements']}></div>
            </div>
        </section>
        <div className={styles.tecnologia}>
            <h1>Tecnologia e natureza potencializando seu relaxamento</h1>
            <div>
                <img src={FotoFuturista} alt="Foto-fururista de um spa" />+
            </div>
            <div className={styles.relax}>
                <h1 className={styles.titulo2}>Elevando seu bem-estar a um novo patamar</h1>
                <p className={styles.paragrafo1}>No Calmaria Spa, cada visita é uma jornada revigorante para mais serenidade e disposição!  
                Independente da sua rotina, vamos ajudar você a encontrar seu paraíso particular.</p>
                <div className={styles.imagemRelax1}>
                    <img src={imagemRelaxa1}/>
                </div>
                <div className={styles.imagemRelax2}>
                    <img src={imagemRelaxa2}/>
                </div>
            </div>
        </div>
    </>
    );
}