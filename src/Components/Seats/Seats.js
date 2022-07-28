import './Seats.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import Data from '../Data/Data'
import Seat from '../Seat/Seat'

export default function Seats() {

    const [seats, setSeats] = useState([])
    /* será igual a resposta.data.seat */

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/15/seats')

        promise.then((resposta) => {
            setSeats(resposta.data.seats)
            console.log(resposta.data.seats)


        })

    }, [])

    
    return (
        <>
            <div className='texto'> Selecione o(s) assentos(s)</div>
            <ul className='seats'>
                {seats.map((value) => {
                    <Seat seat={value.name} />
                })}

            </ul>
        </>
    )
}























{/* <div className='texto'> Selecione o(s) assentos(s)</div>
            <ul className='seats'>
                {seats.map((value) => {
                    <Seat seat={value.name}/>
                })}
                
            </ul> */}

{/* <>
            {seats.map(()=> {
                <Seat seat={seats.seat}/>
            })}
        </> */}
