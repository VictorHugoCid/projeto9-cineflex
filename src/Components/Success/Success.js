import { Link, useNavigate } from 'react-router-dom'
import './Success.css'

export default function Success({userData, title, info, seatSuccess}) {

    const navigate = useNavigate()
    /* console.log('Sucesso',userData.ids) */
    
    return (

        <>
            <div className='texto'>Pedido feito com sucesso!</div>
            
            <ul className='succesMain'>
                <li className='container'>
                    <h1>Filme e sessão</h1>
                    <div>
                        <p>{title}</p>
                        <p>{info.day.date} - {info.name}</p>
                    </div>
                </li>
                <li className='container'>
                    <h1>Ingressos</h1>
                    <div>
                        {seatSuccess.map((value) => 
                            <p>Assento {value}</p>
                        )}
                    </div>
                </li>
                <li className='container'>
                    <h1>Comprador</h1>
                    <div>
                        <p>Nome: {userData.name}</p>
                        <p>CPF: {userData.cpf}</p>
                    </div>
                </li>
            </ul>

            <button className='buttonSuccess' onClick={() => (navigate("/"))}>
                Voltar para Home
            </button>
        </>

    )
}