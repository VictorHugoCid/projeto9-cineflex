import { Link } from 'react-router-dom'

import './Card.css'

export default function Card({ image, key }) {

    return (

        <Link className='box' to="/film">
            <img key={key} src={image} alt='Hey' />
        </Link>
    )
}

{/* <Link to="/features">Features</Link> */ }

{/* <div className="box">
    <img key={key} src={image} alt='Hey' />
</div> */}