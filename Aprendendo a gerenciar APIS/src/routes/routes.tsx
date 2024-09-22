import PaginaPrincipal from '../pages/Principal';
import {Routes, Route } from 'react-router-dom';
import Teste from '../pages/espaco';
import Servicos from '../pages/serviços';
import Contato from '../pages/contato';

export default function Rotas(){
    return(
   <main>
    <Routes>
        <Route path='/' element={<PaginaPrincipal/>}/>
        <Route path='/espaço' element={<Teste/>}/>
        <Route path='/serviços' element={<Servicos/>}/>
        <Route path='/contato' element={<Contato/>}/>
    </Routes>
   </main>
    );
}