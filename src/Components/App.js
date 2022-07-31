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
    /* HOME */
    const [arrayHome, setArrayHome] = useState([])

    /* MOVIE */
    const [session, setSession] = useState([])
    const [footerImage, setFooterImage] = useState({})
    const [footerTitle, setFooterTitle] = useState('')

    /* SEATS */
    const [seats, setSeats] = useState([])
    const [weekday, setWeekday] = useState('')
    const [showtime, setShowtime] = useState('')
    const [arraySelection, setArraySelection] = useState([]);
    const [seatSuccess, setSeatSuccess] = useState([])
    const [name, setName] = useState('')
    const [ids, setIds] = useState('')
    const [cpf, setCpf] = useState('')
    const userData ={
        ids,
        name,
        cpf,
    }

    /* SUCCESS-seats */
    const [info, setInfo] = useState()


    return (
        < BrowserRouter >
            <Header />
            <Routes>
            <Route path='/' element={
                <Home 
                    arrayHome={arrayHome}
                    setArrayHome={setArrayHome}/>} />

            <Route path='/filme/:filmeId' element={ 
                <Movie
                    session={session}
                    setSession={setSession}
                    footerImage={footerImage}
                    setFooterImage={setFooterImage}
                    footerTitle={footerTitle}
                    setFooterTitle={setFooterTitle} />} />


            <Route path='/sessao/:sessaoId' element={ 
                <Seats
                    seats={seats}
                    setSeats={setSeats}
                    footerImage={footerImage}
                    setFooterImage={setFooterImage}
                    footerTitle={footerTitle}
                    setFooterTitle={setFooterTitle}
                    weekday={weekday}
                    setWeekday={setWeekday}
                    showtime={showtime}
                    setShowtime={setShowtime}
                    arraySelection={arraySelection}
                    setArraySelection={setArraySelection}
                    seatSuccess={seatSuccess}
                    setSeatSuccess={setSeatSuccess}
                    name={name}
                    setName={setName}
                    ids={ids}
                    setIds={setIds}
                    cpf={cpf}
                    setCpf={setCpf}
                    userData={userData}
                    info={info}
                    setInfo={setInfo}  />} />
            <Route path='/sucesso' element={ 
                <Success
                    userData={userData}
                    title={footerTitle}
                    info={info}
                    seatSuccess={seatSuccess}
                />} />        
            </Routes>

        </BrowserRouter >


    )
}
