import './cards.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Cards(props) {

    return (
        <div>
            <div id='cards'>
                <div id='card--img'>
                    <img src={props.img}></img>
                </div>
                <div id='card--stats'>
                    <span>
                        <FaMapMarkerAlt id='icon' />
                    </span>
                    <span id='card--stats--location'>
                        {props.location}
                    </span>
                    <span >
                        <a id='card--stats--link' href={props.link} target={'_blank'}>View on google Maps</a>
                    </span>
                    <h1 className='text title'>{props.title}</h1>
                    <p className='text date'><strong>{props.date}</strong></p>
                    <p id='card--stats--description'>{props.description}</p>
                </div>
            </div>
            {props.id !== 3 && <hr id='line1'></hr>}
        </div>
    )
}