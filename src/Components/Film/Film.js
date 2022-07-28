import { Link } from 'react-router-dom'

import './Film.css'
import Footer from '../Footer/Footer'

export default function Film(){

    return (
        <>
            <div className='texto'>Selecione o filme</div>
            <div >

                <div className='day'>
                    <h1>Quinta-feita - 24/06/2021</h1>
                    <div className='sections'>
                        <Link classeName='section' to="/seats">15:00</Link>
                        <Link classeName='section' to="/seats">19:00</Link>

                        {/* <li className='section'>15:00</li>
                        <li className='section'>19:00</li> */}
                    </div>
                </div>

                <div className='day'>
                    <h1>Sexta-feita - 25/06/2021</h1>
                    <div className='sections'>
                        <li className='section'>15:00</li>
                        <li className='section'>19:00</li>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}