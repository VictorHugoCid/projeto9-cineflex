import './Footer.css'

import Card from '../Card/Card'

export default function Footer({ image, title, weekday, showtime }) {


    return (
        <>
            {(weekday === undefined) ? (
                <div className="footer">
                    <Card image={image} />
                    <p>{title}</p>
                </div>

            ) : (
                <div className="footer">
                    <Card image={image} />
                    <div>
                        <p>{title}</p>
                        <p>{weekday} - {showtime}</p>
                    </div>
                </div>
            )
            }
        </>
    )
}