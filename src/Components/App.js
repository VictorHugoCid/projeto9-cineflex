import '../CSS/reset.css'
import '../CSS/styles.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from './Footer/Footer'
import Film from './Film/Film'
import Seats from './Seats/Seats'
import Success from './Success/Success';




export default function App() {

    return (
        < BrowserRouter >
            <Header />
            <Routes>
            {/* <Route path='/' element={<Home />} /> */}

            {/* <Route path='/' element={ <Film/>} /> */}
            
            {/* <Route path='/' element={ <Seats/>} /> */}

            <Route path='/' element={ <Success/>} />        
                


            </Routes>

        </BrowserRouter >


    )
}

{/* <>
            <Header/>
            
            <Home/>
        </>
         */}