import { BrowserRouter } from "react-router-dom";

import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";

export default function App() {

    return (

        <>
            <Header/>
            
            <Home/>
        </>
        
        
    )
}

{/* <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />


            </Routes>
            
        </BrowserRouter> */}