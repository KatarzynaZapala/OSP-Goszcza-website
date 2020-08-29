import React, {Component} from 'react';

export default class FireFightersSection extends Component {
    render() {
        return (
            <section className="container fire_section_container">
                <div className="fire_container">
                    <div className="fire__box" id="firefighters">
                        <h2 className="fire__title">Ochotnicza Straż Pożarna Goszcza</h2>
                        <p className="fire__text">Rok założenia: 1922.
                            Liczba członków OSP (dorośli): 55 osób
                            Młodzieżowa Drużyna Pożarnicza chłopców:12 osób.
                            Młodzieżowa Drużyna Pożarnicza dziewcząt: 6 osób.
                            Wyposażeniu jednostki: dwa samochody pożarnicze marki „Star” oraz Ford „Transit”.
                            Jednostka OSP Goszcza posiada własny budynek remizy.
                            Funkcję Prezesa OSP Goszcza pełni druh Henryk Dutkiewicz, a jej Naczelnikiem jest druh Łukasz Dutkiewicz. Kapelanem jednostki jest ksiądz Andrzej Orlikowski - proboszcz parafii Goszcza.
                            Przy OSP Goszcza działa strażacka orkiestra dęta „TON” oraz klub piłkarski „Strażak” Goszcza.
                            Od 1997 roku jednostka OSP Goszcza działa w ramach Krajowego Systemu Ratownictwa Gaśniczego.</p>
                    </div>


                    <div className="fire__foto">foto</div>

                </div>
            </section>
        )

    }
}