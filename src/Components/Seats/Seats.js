import './Seats.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'

export default function Seats() {

    const [seats, setSeats] = useState([])
    const [footerImage, setFooterImage] = useState({})
    const [footerTitle, setFooterTitle] = useState('')
    const [weekday, setWeekday] = useState('')
    const [showtime, setShowtime] = useState('')


    /* const [rere, setRere] = useState(true) */
    const sessionId = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.sessaoId}/seats`)

        promise.then((resposta) => {
            console.log(resposta.data.seats)
            setSeats(resposta.data.seats)

            setFooterImage(resposta.data.movie.posterURL)
            setFooterTitle(resposta.data.movie.title)
            setWeekday(resposta.data.day.weekday)
            setShowtime(resposta.data.name)
        })
    }, [])

   /*  const array = [...seats, ] */

    /* seats.map((value) => {array.push(value.name)}) */
    const array = []
    for (let i = 0; i < seats.length; i++) {
        array[i] = {...seats[i], selected: "false"}
    }

    return (
        <>
            <div className='main'>
                <p className='texto' > Selecione o(s) assentos(s)</p>
                <ul className='seats'>
                    {seats.map((value) => {
                        console.log(array)
                        /* console.log(value.isAvailable) */
                        return <Seat seat={value.name} temVaga={value.isAvailable} />
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

            <Footer
                image={footerImage}
                title={footerTitle}
                weekday={weekday}
                showtime={showtime} />
        </>
    )
}

function Seat({ seat, temVaga }) {
    const [selected, setSelected] = useState('')

    function selectSeat() {
        return (
            <>
                {(selected === '') ? (setSelected('selected')) : (setSelected(''))}
            </>
        )
    }

    switch (temVaga) {
        case false:
            return (
                <li className='seat unAvailable' /* onClick={() => {setSelected(!selected)}} */>
                    {seat}
                </li>
            )
        case true:
            /* console.log(temVaga) */
            return (
                <li className={`seat ${selected}`} onClick={() => { selectSeat() }}>
                    {seat}
                </li>
            )
    }
}
