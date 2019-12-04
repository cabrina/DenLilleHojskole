import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
        <header>
            <Link to="/" className="img-link"><img src="gfx/logo.png" alt="den lille højskole"/></Link>
            <Navbar />
            <Search />
        </header>
    )
}
