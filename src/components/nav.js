import { FaGlobeAmericas } from 'react-icons/fa'
import './nav.css'

export default function Nav() {
    return (
        <div id="main--nav">
            <nav id='navbar'>
                <FaGlobeAmericas id='nav--icon' />
                <p>My travel Journal.</p>
            </nav>
        </div>
    )
}