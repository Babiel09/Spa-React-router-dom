import { Link } from "react-router-dom";
import Logo from "../Logo";
import Serviços from "../../pages/serviços";
import Espaço from "../../pages/espaco";
import styles from './header.module.scss';
import Contato from "../../pages/contato";

const links = [

    {path:'/espaço', component:Espaço},

    {path:'/serviços', component: Serviços },

    {path:'/contato', component: Contato}

]



export default function Header(){
    return(  
        <div className={styles.container}>
            <span className={styles.linha}></span>
        <div className={styles.header}>
            <Logo/>
            <hr 
            className={styles.linha2}
            />
            <div>
            <ul className={styles.linksContainer}>
            {links.map(({path, component:Component}, index)=> (

                    <div key={index}>
                        
                            <li className={styles.links}>
                         <Link
                            className={styles.informations}
                            to={path}
                            >
                             {Component.name}
                            </Link>
                            </li>
                           
                    </div>
            ))}
             </ul> 
            </div>
        </div>
        </div>

    )
}