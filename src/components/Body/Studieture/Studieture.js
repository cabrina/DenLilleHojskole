import React from 'react'

export default function Studieture() {
    return (
        <div className="studieture">
            <h1>STUDIETURE</h1>
            <p>I løbet af et semester på Den lille højskole har du mulighed for at komme med på to storby-studieture hhv. til Berlin og New York. Berlin-turen er den obligatoriske tur for alle elever, mens New York-turen er et ekstra tilbud, som skal tilkøbes, og som gennemføres i umiddelbar forlængelse af opholdet.  Det koster ekstra 10.000 kr. at komme med på New York-turen, som man uforpligtende markerer sin interesse i når man tilmelder sig et ophold på Den lille højskole (via afkrydsning på on line-tilmeldingsskemaet). Først når man er startet på højskolen afkræves man en bindende tilmelding til turen.</p>
            <div>
                <h2>Berlin</h2>
                <p>Studieturen til Berlin byder på 5 dage i den stærkt oplevelsesmættede tyske hovedstad. Du får set de sædvanlige turist must-sees, men vil også opleve nogle af Berlins knap så turistede attraktioner samt en stor dosis kultur-leben. Endelig får du masser af tid til at cruise rundt i Berlin på egen hånd.</p>
                <p>Vi kører i bus fra højskolen tur/retur og er i Berlin fra mandag til fredag.</p>
            </div>
            <div>
                <h2>New York</h2>
                <p>I modsætning til Berlin-turen, som bærer præg af at være en fælles studietur for hele den samlede gruppe, adskiller New York-turen sig ved også at tilbyde eleverne nogle linjefags-relaterede oplevelser. Disse kunne være skuespiller-workshop for filmskuespillerne, danse-workshop for danserne, fotoekskursion for foto-eleverne etc. Derudover ser man naturligvis en række af de seværdigheder man bare bør se, når man er i New York.</p>
                <p>I prisen for New York-turen er inkluderet fly, fuld forplejning, entréer, transportudgifter i New York etc.</p>
            </div>
            <div className="galleri">
                <h1>Galleri</h1>
                <div className="galleri-grid">
                    <img src="images/berlin2.jpg" alt=""/>
                    <img src="images/berlin1.jpg" alt=""/>
                    <img src="images/berlin3.jpg" alt=""/>
                    <img src="images/newyork1.jpg" alt=""/>
                    <img src="images/newyork2.jpg" alt=""/>
                    <img src="images/newyork3.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}
