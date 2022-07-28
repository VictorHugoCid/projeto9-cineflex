import './Card.css'

export default function Card({image, key}){

    return(
        <div className="box" >
            <img  key={key} src={image} alt='Hey'/>
        </div>
    )
}