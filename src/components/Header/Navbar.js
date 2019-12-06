import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li className="dropdown">
                    <Link to="/LangeKurser">Lange kurser</Link>
                    <div className="dropdown-content">
                        <Link to="/Priser">Priser og tilskud</Link>
                        <Link to ="/Linjefag">Linjefag</Link>
                    </div>
                </li>
                <li>
                    <Link to="/KorteKurser">Korte kurser</Link>
                </li>
                <li>
                    <Link to="/Studieture">Studieture</Link>
                </li>
                <li>
                    <Link to="/Kursuscenter">Kursuscenter</Link>
                </li>
                <li>
                    <Link to="/">Om skolen</Link>
                </li>
            </ul>
        </nav>
    )
}
