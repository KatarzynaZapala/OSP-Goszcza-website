import React, {Component} from 'react';

export default class ActionSection extends Component {
    render() {
        return (
            <section className="container action_section_container">
                <div className="action_container">
                    <div className="action__box action__planners">
                        <h2 className="action__title">PLANIŚCI</h2>
                        <p className="action__text">  Zadaniem planisty jest określenie, w porozumieniu z Dowódcą, rejonu poszukiwań, zaznaczenie go na mapie w komputerze, a następnie podział na sektory, które przydziela on poszczególnym zespołom ratowniczym do przeszukania. Jego podstawowym sprzętem jest laptop z wczytaną mapą okolicy prowadzenia akcji.
                            <br/><br/>Przez cały czas jej trwania planista koordynuje pracę zespołów w terenie, zbiera od nich informacje i prowadzi notatki z przebiegu działań.
                            <br/><br/>Szkolenie planistów obejmuje cały zakres wiedzy i umiejętności nawigatorów, poszerzony o zagadnienia planowania akcji oraz obsługę programów komputerowych, monitorujących przebieg działań.</p>
                    </div>
                    <div className="action__box action__rescuers">
                        <h2 className="action__title">RATOWNICY</h2>
                        <p className="action__text">Ważnymi członkami grupy poszukiwawczo - ratowniczej są ratownicy, przeszkoleni w zakresie udzielania kwalifikowanej pierwszej pomocy.
                            <br/><br/>Dążymy do tego, aby w przyszłości wszyscy członkowie GPR OSP Goszcza byli ratownikami z uprawnieniami Kwalifikowanej Pierwszej Pomocy.
                        </p>
                    </div>
                    <div className="action__box action__navigators">
                        <h2 className="action__title">NAWIGATORZY</h2>
                        <p className="action__text">Podczas poszukiwań terenowych zespołowi ratowniczemu towarzyszy nawigator, wytyczający drogę marszu przy pomocy mapy, kompasu i GPS-a oraz utrzymujący łączność ze sztabem.
                            <br/><br/>GPR Goszcza prowadzi stałe szkolenie nawigatorów. Obejmuje ono umiejętności: biegłego posługiwania się mapą, orientacji w terenie przy pomocy kompasu oraz odbiorników GPS, wytyczania określonej przez przewodnika psa marszruty zespołu ratowniczego, prowadzenia zespołu zgodnie z podjętym planem.
                            <br/><br/>W czasie akcji nawigator odpowiedzialny jest za to, by wyznaczony zespołowi sektor został dokładnie przeszukany. Obsługuje także radiotelefon utrzymując łączność z dowódcą grupy i sztabem akcji.
                        </p>
                    </div>

                </div>

            </section>
        )

    }
}