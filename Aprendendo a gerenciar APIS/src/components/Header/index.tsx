import { Link } from "react-router-dom";
import Logo from "../Logo";
import Servicos from "../../pages/serviços";
import Espaço from "../../pages/vou-pensar";

const links = [
    {path:'/serviços', component: Servicos },
    
    {path:'/espaço', component: Espaço}

]



export default function Header(){
    return(
        <div>
            <Logo/>
            <div>
            {links.map(({path, component:Component}, index)=> (

                    <div key={index}>
                        <Link
                        to={path}
                        >
                            {Component.name}
                        </Link>     
                    </div>
            ))}
            </div>
        </div>
    )
}