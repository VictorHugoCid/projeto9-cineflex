import './Home.css'

import Card from '../Card/Card'

import axios from "axios";
import { useEffect, useState } from "react";
/* import { useParams } from 'react-router-dom'; */

export default function Home() {
    const [array, setArray] = useState([])

    /* const movieId = useParams(); */

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then((resposta) => {
            /* console.log(resposta.data) */
            setArray(resposta.data)
            /* console.log(array) */

        })
    }, [])


    return (
        <div className="home">
            <div className='texto'>Selecione o filme</div>
            {/* VAI ROLAR UM MAP */}
            <div className='boxContainer'></div>
            {array.map(value => {
                return (
                    <Card
                        key={value.id}
                        image={value.posterURL}
                        movieId={value.id}
                    />
                )
            })}


        </div>
    )
}