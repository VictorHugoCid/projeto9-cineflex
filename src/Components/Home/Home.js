import './Home.css'

import Card from '../Card/Card'
import image from '../Data/Data'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(){
    const [array, setArray] = useState([])
    const [rere, setRere] = useState(true)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
    
        promise.then((resposta) => {
            console.log(resposta.data)
            setArray(resposta.data)
            /* console.log(array) */

        })
    },[rere])


    return (
        <div className="home"> 
        <div className='texto'>Selecione o filme</div>
            {/* VAI ROLAR UM MAP */}

            {array.map(value => {
                    return (
                        <Card key={value.id} image={value.posterURL} />
                    )
                })} 
            
        </div>
    )
    
    
}