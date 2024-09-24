import styles from './parte-final.module.scss';
import Imagem1 from '../../assets/icon-massagem.png';
import Imagem2 from '../../assets/icon-tratamentos.png';
import Imagem3 from '../../assets/icon-dias-especiais.png';
import EstrelaImagem from '../../assets/Soft Star.png';

const imagens = [{imagem:Imagem1, descricao: (
    <>
    Relaxantes, terapêuticas,<br/>
    desportivas e drenagens. Conte <br />
    com nossos terapeutas <br />
    especializados para aliviar suas <br />
    tensões, 
    tratar dores e retenção <br />
    de líquido através dessa técnica <br />
    milenar tão eficiente para o <br />
    organismo humano.
    </>
)
 } , {imagem:Imagem2, descricao: (
        <>
        Tratamos sua pele com <br />
        gentileza através de esfoliações <br />
        corporais suaves, 
        hidratações <br />
        profundas do corpo e do rosto,<br />
         além de limpeza facial. Você <br />
         também pode desfrutar de <br />
         banhos revigorantes de sais.
        </>
 )
     }, {imagem:Imagem3, descricao: (
        <>
        Pacotes cuidadosamente <br />
        elaborados, 
        desde o  "Dia <br />
        Revitalizante" com massagens e tratamentos faciais, 
        até o "Dia Serenidade" com banhos <br />
        terapêuticos e meditação. <br />
        Mime-se com momentos de <br />
        refúgio e tranquilidade.
        </>
     )}];

export default function ParteFinal(){
    return(
        <div className={styles.parteFinal}>
            <ul>
                {imagens.map(({imagem, descricao}, index)=>
                <li key={index}>
                    <div>
                    <img src={imagem} 
                    className={styles.imagem}/>
                    <h3>{index === 0 ? "Mensagens": index === 1 ? "Tratamentos Corporais": "Dias especiais"}</h3>
                    <img src={EstrelaImagem}
                    className={styles.estrela}
                    />
                    <p className={styles.descricao}>{descricao}</p>
                    </div>
                </li>
                )}
            </ul>
        </div>
        
    );
    
}