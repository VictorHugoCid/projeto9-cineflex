import './Seats.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'

export default function Seats({ setUserInfo, userInfo, seatSuccess, setSeatSuccess, userData, ids, setIds, setName, setCpf }) {

    const [seats, setSeats] = useState([])

    const [weekday, setWeekday] = useState('')
    const [showtime, setShowtime] = useState('')
    const [footerImage, setFooterImage] = useState({})
    const [footerTitle, setFooterTitle] = useState('')

    const [arraySelection, setArraySelection] = useState([]);

    const sessionId = useParams()
    const navigate = useNavigate()

    function handleForm(e) {
        e.preventDefault()
        if (ids.length === 0) {
            alert('Vai sentar no chão?')
            return
        }
        
        if (userData.cpf.length !== 11) {
            alert(`${userData.cpf.length}, Seu CPF precisa ter 11 caracteres`)
            return
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', userData);
        promise
            .then(resposta => {
                console.log(userData)
                console.log(resposta.data)
                navigate('/sucesso')
            })

    }

   

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId.idSessao}/seats`)

        promise.then((resposta) => {
            setUserInfo(resposta.data)
            setSeats(resposta.data.seats)
            setFooterImage(resposta.data.movie.posterURL)
            setFooterTitle(resposta.data.movie.title)
            setWeekday(resposta.data.day.weekday)
            setShowtime(resposta.data.name)
        })
    }, [sessionId])

    return (
        <>
            {(seats.length > 0) ? (
                <>
                    <div className='main'>
                        <p className='texto' > Selecione o(s) assentos(s)</p>
                        <ul className='seats'>
                            {seats.map((value) => {
                                return <Seat
                                    key={value.id}
                                    seatId={value.id}
                                    seat={value.name}
                                    temVaga={value.isAvailable}
                                    setArraySelection={setArraySelection}
                                    arraySelection={arraySelection}
                                    setIds={setIds}
                                    seatName={value.name}
                                    seatSuccess={seatSuccess}
                                    setSeatSuccess={setSeatSuccess}
                                />
                            })}
                        </ul>
                        <ul className='subtitle'>
                            < div >
                                <li className='selected' ></li>
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

                        <form onSubmit={handleForm}>
                            <div className='inputs'>
                                <label>Nome do comprador</label>
                                <input type="text" required onChange={e => setName(e.target.value)} placeholder='Digite seu nome...' />
                            </div>

                            <div className='inputs'>
                                <label>CPF do comprador</label>
                                <input type="text" required onChange={e => setCpf(e.target.value)} placeholder='Digite seu CPF...' />
                            </div>

                            <button type='submit' className='buttonSeats' >
                                Resevar assento(s)
                            </button>{/* vai ter q rolar um useNavigate aqui */}
                        </form>

                    </div>

                    <Footer
                        image={footerImage}
                        title={footerTitle}
                        weekday={weekday}
                        showtime={showtime} />
                </>

            ) : (<div>carregando...</div>)}
        </>
    )
}


function Seat(
    {
        seat,
        temVaga,
        seatId,
        arraySelection,
        setArraySelection,
        setIds,
        seatSuccess,
        setSeatSuccess,
        seatName
    }) {

    const [selected, setSelected] = useState(false)

    function selectSeat() {

        setSelected(!selected)
        if (!arraySelection.includes(seatId)) {
            setArraySelection([...arraySelection, seatId])
            setSeatSuccess([...seatSuccess, seatName])
        } else {
            const arrayAuxId = [...arraySelection]
            const arrayAuxName = [...arraySelection]

            for (let i = 0; i < arraySelection.length; i++) {
                if (arraySelection[i] === seatId) {
                    arrayAuxId.splice(i, 1)
                    arrayAuxName.splice(i, 1)

                    setArraySelection(arrayAuxId)
                    setSeatSuccess(arrayAuxName)
                }
            }
        }
    }

    let color = ''
    if (selected === false) {
        color = ''
    } else {
        color = 'selected'
    }
    setIds(arraySelection)
    return (
        <>
            {(temVaga) ? (
                <li className={`seat ${color}`} onClick={() => {
                    selectSeat()
                }}>
                    {(seat < 10) ? (`0${seat}`) : (seat)}

                </li>
            ) : (
                <li className='seat unAvailable'>
                    {(seat < 10) ? (`0${seat}`) : (seat)}
                </li>
            )}
        </>
    )
}
