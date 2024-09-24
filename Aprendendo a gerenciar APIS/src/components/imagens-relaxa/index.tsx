import styles from './imagem.module.scss';
import imagemRelaxa1 from '../../assets/espaco-2.png';
import imagemRelaxa2 from '../../assets/espaco-3.png';
import Separador2 from '../../assets/separador-esquerda.svg'

export default function ImagensRelaxantes(){
    return(
        <>
         <div className={styles.relax}>
                <h1 className={styles.titulo2}>Elevando seu bem-estar a <br /> 
                um novo patamar</h1>
                <p className={styles.paragrafo1}>No Calmaria Spa, cada visita é uma jornada <br />
                 revigorante para mais serenidade e disposição! <br />  
                Independente da sua rotina, vamos ajudar você a <br />
                 encontrar seu paraíso particular.</p>
                 <br />
                 <img src={Separador2}/>
                </div>
        <div className={styles.imagemRelax1}>
                    <img src={imagemRelaxa1}/>
                </div>
                <div className={styles.imagemRelax2}>
                    <img src={imagemRelaxa2}/>
                </div>

        
        </>
    );
}