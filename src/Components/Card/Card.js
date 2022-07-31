import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ image, movieId }) {

    return (

        <Link className='box' to={`filme/${movieId}`} >
            <img src={image} alt='Hey' />
        </Link>
    )
}

