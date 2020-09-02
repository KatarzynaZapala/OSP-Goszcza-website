import React, {Component} from 'react';

//section with information about volunteer Fire Department:

export default class FireFightersSection extends Component {
    render() {
        return (
            <section className="container fire_section_container">
                <div className="fire_container">

                    <div className="fire__box" id="firefighters">
                        <h2 className="fire__title">Ochotnicza Straż Pożarna </h2>

                        <p className="fire__text">
                            OSP Goszcza działa w ramach Krajowego Systemu Ratownictwa Gaśniczego. Została założona w
                            1922 roku i liczy 55 członków.
                            <br/><br/>W jej skład wchodzą także Młodzieżowa Drużyna Pożarnicza chłopców (12 osób) oraz
                            Młodzieżowa Drużyna Pożarnicza dziewcząt (6 osób).
                            <br/><br/>Na wyposażeniu jednostki znajdują się dwa samochody pożarnicze marki „Star” oraz
                            Ford „Transit”.Jednostka OSP Goszcza posiada również własny budynek remizy.
                            <br/><br/>Funkcję Prezesa OSP Goszcza pełni druh Henryk Dutkiewicz, a jej Naczelnikiem jest
                            druh Łukasz Dutkiewicz. Kapelanem jednostki jest ksiądz Andrzej Orlikowski - proboszcz
                            parafii Goszcza.
                            <br/><br/>Przy OSP Goszcza działa strażacka orkiestra dęta „TON” oraz klub piłkarski
                            „Strażak” Goszcza.
                        </p>

                    </div>

                    <div className="fire__foto">foto</div>

                </div>
            </section>
        )
    }
}