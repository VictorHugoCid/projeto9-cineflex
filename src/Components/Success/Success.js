import './Success.css'

export default function Success() {
    return (

        <>
            <div className='texto'>Pedido feito com sucesso!</div>
            
            <ul>
                <li className='container'>
                    <h1>Filme e sessão</h1>
                    <div>
                        <p>Enola Holmes</p>
                        <p>24/06/2021 15:00</p>
                    </div>
                </li>
                <li className='container'>
                    <h1>Ingressos</h1>
                    <div>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </div>
                </li>
                <li className='container'>
                    <h1>Comprador</h1>
                    <div>
                        <p>Nome: João da Silva Sauro</p>
                        <p>CPF: 123.456.789-10</p>
                    </div>
                </li>
            </ul>

            <div className='buttonSuccess'>
                Voltar para Home
            </div>





        </>

    )
}