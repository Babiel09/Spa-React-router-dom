import PaginaPrincipal from '../pages/Principal';
import {Routes, Route } from 'react-router-dom';

export default function Rotas(){
    return(
   <main>
    <Routes>
        <Route path='/' element={<PaginaPrincipal/>}/>
    </Routes>
   </main>
    );
}