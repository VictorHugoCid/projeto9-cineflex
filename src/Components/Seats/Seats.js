import './Seats.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import Data from '../Data/Data'

export default function Seats() {

    const [seats, setSeats] = useState([])
    /* const [rere, setRere] = useState(true) */

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/15/seats')

        promise.then((resposta) => {
            setSeats(resposta.data.seats)
            console.log(resposta.data.seats)
            console.log(seats)


        })

    }, [/* rere */])

    return (

        <>
            <div className='main'>
                <p className='texto' /* onClick={() => setRere(!rere)} */> Selecione o(s) assentos(s)</p>
                <ul className='seats'>
                    {seats.map((value) => {
                        return <Seat seat={value.name} />
                    })}
                </ul>
                <ul className='subtitle'>
                    < div >
                        <li className='selected'></li>
                        <p>Selecionado</p>
                    </div >
                    < div >
                        <li className='available'></li>
                        <p>Disponível</p>
                    </div >
                    < div >
                        <li className='unAvailable'></li>
                        <p>Indisponível</p>
                    </div >
                </ul>


                <div className='inputs'>
                    <p>Nome do comprador</p>
                    <input type="text" placeholder='Digite seu nome...' />
                </div>

                <div className='inputs'>
                    <p>CPF do comprador</p>
                    <input type="text" placeholder='Digite seu CPF...' />
                </div>

                <div className='buttonSeats'>
                    Resevar assento(s)
                </div>
            </div>

            <Footer />
        </>
    )
}

function Seat({ seat }) {
    return (
        <>
            <li className='seat'>
                {seat}
            </li>
        </>
    )
}

