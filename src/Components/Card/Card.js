import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ image, key, movieId }) {

    return (

        <Link className='box' to={`filme/${movieId}`} >
            <img key={key} src={image} alt='Hey' />
        </Link>
    )
}

