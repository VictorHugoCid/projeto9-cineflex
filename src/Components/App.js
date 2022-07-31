import '../CSS/reset.css'
import '../CSS/styles.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import React, { useState } from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Movie from './Movie/Movie'
import Seats from './Seats/Seats'
import Success from './Success/Success';




export default function App() {    

    /* SUCCESS-seats */
    const [userInfo, setUserInfo] = useState()
    const [seatSuccess, setSeatSuccess] = useState([])

    const [name, setName] = useState('')
    const [ids, setIds] = useState('')
    const [cpf, setCpf] = useState('')
    const userData = {
        ids,
        name,
        cpf,
    }



    return (
        < BrowserRouter >
            <Header />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filme/:idFilme' element={ <Movie />} />
            <Route path='/sessao/:idSessao' element={ 
                <Seats
                setUserInfo={setUserInfo}
                userInfo={userInfo}
                seatSuccess={seatSuccess}
                setSeatSuccess={setSeatSuccess}
                userData={userData}
                ids={ids}
                setIds={setIds}
                cpf={cpf}
                setCpf={setCpf}
                name={name}
                setName={setName}
                />} />
            <Route path='/sucesso' element={ 
                <Success 
                    userInfo={userInfo}
                    seatSuccess={seatSuccess}
                    userData={userData}
                    name={name}
                    cpf={cpf}
                    />} />        
            </Routes>

        </BrowserRouter >


    )
}
