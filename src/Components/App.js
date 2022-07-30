import '../CSS/reset.css'
import '../CSS/styles.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Movie from './Movie/Movie'
import Seats from './Seats/Seats'
import Success from './Success/Success';




export default function App() {

    return (
        < BrowserRouter >
            <Header />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filme/:filmeId' element={ <Movie/>} />
            <Route path='/sessao/:sessaoId' element={ <Seats/>} />
            <Route path='/successo' element={ <Success/>} />        
            </Routes>

        </BrowserRouter >


    )
}
