import styles from './botao.module.scss';


//Definindo as propriedades do botão:
interface Botao{
    onClick?: () => void;
    nome:string
}


export default function Botao({nome, onClick}:Botao){
    return(
        <button
        className={styles.botao}
        onClick={onClick}
        >{nome}</button>
    );
}