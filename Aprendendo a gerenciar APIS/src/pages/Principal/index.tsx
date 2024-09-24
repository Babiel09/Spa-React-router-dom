import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao';
import Header from '../../components/Header';
import RostoMoca from '../../assets/home-image.png';
import styles from './paginaPrincipal.module.scss';
import ImagensRelaxantes from '../../components/imagens-relaxa';
import ImagemFuturista from '../../components/imagens-futurista';

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
        <div>
            <ImagemFuturista/>
        </div>
        <div>
            <ImagensRelaxantes/>
        </div>
    </>
    );
}