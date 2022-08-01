import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header(){

    const navigate = useNavigate()
    return (

        <div className='header' onClick={() => {navigate('/')}}>
            <h1>CINEFLEX</h1>
        </div>
    )
}