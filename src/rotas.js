import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/cadastro-produtos" element={<CadastroProduto />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
