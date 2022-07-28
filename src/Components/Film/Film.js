import './Film.css'
import Footer from '../Footer/Footer'

export default function Film(){

    return (
        <>
            <div className='texto'>Selecione o filme</div>
            <div className="section">

                <div className='day'>
                    <h1>Quinta-feita - 24/06/2021</h1>
                    <div className='time'>
                        <li>15:00</li>
                        <li>19:00</li>
                    </div>
                </div>

                <div className='day'>
                    <h1>Sexta-feita - 25/06/2021</h1>
                    <div className='time'>
                        <li>15:00</li>
                        <li>19:00</li>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}