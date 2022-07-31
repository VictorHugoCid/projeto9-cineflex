import './Home.css'

import Card from '../Card/Card'
import axios from "axios";
import { useState, useEffect} from "react";

export default function Home({}) {
    
    const [arrayHome, setArrayHome] = useState([])
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')

        promise.then((resposta) => {
            setArrayHome(resposta.data)
        })
    }, [])

    return (
        <div className="home">
            <div className='texto'>Selecione o filme</div>
            <div className='boxContainer'></div>
            {arrayHome.map(value => {
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