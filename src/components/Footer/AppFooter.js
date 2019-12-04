import React from 'react'

export default function AppFooter() {
    return (
        <footer>
            <div className="address">
                <h1>Den Lille Højskole</h1>
                <p>Mindevej 19</p>
                <p>8543 Hornslet</p>
                <p>Danmark</p>
                <p className="tlfnr">+45 77 34 77 12</p>
                <p>info@dlhoejskole.dk</p>
                <p>www.dlhoejskole.dk</p>
                <img src="/gfx/facebook-logo-button.png" alt="Den lille Højskole facebook"/>
            </div>
            <form action="/">
                <h2>Spørg os</h2>
                <input type="text" name="name" id="name" value="Navn..."/>
                <input type="text" name="email" id="email" value="Email..."/>
                <input type="text" name="message" id="message" value="Besked..."/>
                <input type="button" value="Send" id="send"/>
            </form>
        </footer>
    )
}
