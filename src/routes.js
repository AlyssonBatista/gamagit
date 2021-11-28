import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";

import Repositories from './pages/Repositories/repositories';
import Home from './pages/Home/home';

export function rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/repositories' element={<Repositories/>}/>
      </Routes>
    </BrowserRouter>
  )
}


