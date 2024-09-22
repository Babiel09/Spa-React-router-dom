import PaginaPrincipal from '../pages/Principal';
import {Routes, Route } from 'react-router-dom';
import Teste from '../pages/vou-pensar';
import Servicos from '../pages/serviços';

export default function Rotas(){
    return(
   <main>
    <Routes>
        <Route path='/' element={<PaginaPrincipal/>}/>
        <Route path='/espaço' element={<Teste/>}/>
        <Route path='/serviços' element={<Servicos/>}/>
    </Routes>
   </main>
    );
}