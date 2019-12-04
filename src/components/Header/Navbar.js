import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/LangeKurser">Lange kurser</Link>
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
