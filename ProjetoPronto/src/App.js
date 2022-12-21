import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './Pages/AddConteudo/AddConteudo';
import Edit from './Pages/Editar/Editar';
import Feed from './Pages/Inicial/Inicial';
import Lermais from './Pages/LerMais/LerMais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/lermais/:id" element={<Lermais />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
