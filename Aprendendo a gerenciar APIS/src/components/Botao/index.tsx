//Definindo as propriedades do botão:
interface Botao{
    onClick?: () => void;
    nome:string
}


export default function Botao({nome, onClick}:Botao){
    return(
        <button
        onClick={onClick}
        >{nome}</button>
    );
}