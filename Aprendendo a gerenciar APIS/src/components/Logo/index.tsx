import logo from '../../assets/Logo-Spa.png';
import styles from './logo.module.scss';

export default function Logo(){
    return(
        <div>
            <img
            src={logo} 
            alt="Logo do site" />
        </div>
    )
}