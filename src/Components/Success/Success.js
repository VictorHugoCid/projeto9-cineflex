import { useNavigate } from 'react-router-dom'
import './Success.css'

export default function Success({userInfo, seatSuccess, userData, name, cpf}) {

    const navigate = useNavigate()


    function cpf(value){
        value=value.replace(/\D/g,"")                    
        value=value.replace(/(\d{3})(\d)/,"$1.$2")       
        value=value.replace(/(\d{3})(\d)/,"$1.$2")       
        value=value.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
        return value
    }
    
    return (

        <>
            <div className='texto'>Pedido feito com sucesso!</div>
            
            <ul className='succesMain'>
                <li className='container'>
                    <h1>Filme e sessão</h1>
                    <div>
                        <p>{userInfo.movie.title}</p>
                        <p>{userInfo.day.date} - {userInfo.name}</p>
                    </div>
                </li>
                <li className='container'>
                    <h1>Ingressos</h1>
                    <div>
                        {seatSuccess.map((value, index) => 
                            <p /* key={index} */>Assento {value}</p>
                        )}
                    </div>
                </li>
                <li className='container'>
                    <h1>Comprador</h1>
                    <div>
                        <p>Nome: {name}</p>
                        <p>CPF: {cpf(userData.cpf)}</p>
                    </div>
                </li>
            </ul>

            <button className='buttonSuccess' onClick={() => (navigate("/"))}>
                Voltar para Home
            </button>
        </>

    )
}