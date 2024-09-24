import styles from './futurista.module.scss';
import FotoFuturista from '../../assets/espaco-1.png';
import Separador from '../../assets/separador-direita.svg'

export default function ImagemFuturista(){
    return(
        <>
            <div className={styles.tecnologia}>
                <h1>Tecnologia e natureza <br/>potencializando seu <br /> relaxamento</h1>
                <p>Oferecemos equipamentos de ponta, 
                    produtos <br /> 
                    certificados e uma equipe de profissionais ultra <br />
                     qualificados para dissipar
                     seu estresse e ajudar você em sua busca por equilíbrio e 
                        tranquilidade.</p>
                        <br />
                        <div className={styles.separador}>
                    <img src={Separador} alt="Separador da imagem" />
                    </div>
                        </div>
                <div className={styles.imgContainer}>
                 <img src={FotoFuturista} alt="Foto-fururista de um spa" />
                </div>
                
            
    </>
    );
}