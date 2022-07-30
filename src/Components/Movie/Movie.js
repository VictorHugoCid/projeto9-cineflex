import { Link, useParams } from 'react-router-dom'

import './Movie.css'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Movie() {
    const [session, setSession] = useState([])
    const [footerImage, setFooterImage] = useState({})
    const [footerTitle, setFooterTitle] = useState('')
    const [sessionId, setSessionId] = useState('')
    /*     const [firstSession, setFirstSession] = useState([])
        const [lastSession, setLastSession] = useState([]) */

    /* pegar o id do filme escolhido na HOME AINDA NAO SEI COMO */
    const movieId = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId.filmeId}/showtimes`)

        promise.then((resposta) => {
            /* console.log(resposta.data) */
            setSession(resposta.data.days)
            setFooterImage(resposta.data.posterURL)
            setFooterTitle(resposta.data.title)
            /* console.log(movieId) */
        })

    }, [])


    return (

        <>
            {(session.length === 0) ? (
                <div>"carregando..."</div>
            ) : (
                <>
                    <div className='texto'>Selecione o Horário</div>
                    <div className='movieContainer'>
                        {/*  VEM DE MAP */}
                        {session.map((value) => {
                            return (
                                <div className='day'>
                                    <h1>{`${value.weekday} - ${value.date}`}</h1>
                                    <div className='sessions'>
                                        <Link to={`/sessao/${value.showtimes[0].id}`}>
                                            <p className='session'>{value.showtimes[0].name}</p>
                                        </Link>
                                        <Link to={`/sessao/${value.showtimes[1].id}`}>
                                            <p className='session'>{value.showtimes[1].name}</p>
                                        </Link>
                                    </div>
                                </div>
                            )

                        })}
                    </div>

                    <Footer image={footerImage} title={footerTitle} /> {/* ESSA IMAGEM VENDO DO NOVO AXIOS.GET */}
                </>
            )}
        </>


    )
}