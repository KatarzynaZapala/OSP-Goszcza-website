import React, {Component} from "react";

//section with information about types od dogs rescuers:

export default class DogsSection extends Component {
    render() {
        return (
            <div className="section_dog_container" id="dogs">
                <div className="dog_container">

                    {/*entry text*/}

                    <div className="dog_box">
                        <div className="dog_header">
                            <h3 className="dog__title">psy ratownicze</h3>
                            <p className="dog__text"> Psy w naszej grupie są własnością prywatną, wspólnie ze swoim
                                przewodnikiem (właścicielem) tworzą zespół ratowniczy.
                                <br/><br/>Przewodnicy sami szkolą swoje psy, korzystają jednak z wiedzy i doświadczenia
                                instruktorów szkolenia psów ratowniczych z PSP i spoza PSP, a także z rad i pomocy
                                doświadczonych kolegów z innych jednostek ratowniczych. </p>
                        </div>
                    </div>

                    {/*field dog*/}

                    <div className="dog_box">
                        <div className="visible">
                            <div className="dog_picture dog_picture_first"/>
                        </div>

                        <div className="hidden">
                            <div className="dog_text dog_text_first">
                                <h3 className="dog__title">Pies ratowniczy <br/>specjalność terenowa:</h3>
                                <p className="dog__text"> Przeszukuje teren, rewirując swobodnie i szukając zapachu
                                    człowieka.
                                    <br/><br/>Jego zadaniem jest odnaleźć znajdujące się na tym terenie osoby i
                                    poinformować o tym przewodnika, lub upewnić go, że w wyznaczonym terenie nikogo nie
                                    ma.
                                    <br/><br/>W zależności od metody szkolenia pies tylko informuje o odnalezieniu
                                    (oszczekując), lub także doprowadza przewodnika do odnalezionego człowieka. </p>
                            </div>
                        </div>
                    </div>

                    {/*rubble dog*/}

                    <div className="dog_box">
                        <div className="visible">
                            <div className="dog_picture dog_picture_second"/>
                        </div>

                        <div className="hidden">
                            <div className="dog_text dog_text_second">
                                <h3 className="dog__title">Pies ratowniczy <br/>specjalność gruzowiskowa: </h3>
                                <p className="dog__text"> Poszukuje osób zasypanych pod gruzami wskutek katastrof
                                    budowlanych lub trzęsień ziemi, przeszukuje gruzowisko i informuje przewodnika o
                                    miejscach, w których zarejestruje zapach człowieka.
                                    <br/><br/>Musi być sprawny fizycznie, bez lęku i wahania poruszać się w trudnym,
                                    niestabilnym, często niebezpiecznym terenie, pracować w warunkach hałasu, dymu lub
                                    otwartego ognia.</p>
                            </div>
                        </div>
                    </div>

                    {/*tracking dog*/}

                    <div className="dog_box">
                        <div className="visible">
                            <div className="dog_picture dog_picture_third"/>
                        </div>

                        <div className="hidden">
                            <div className="dog_text dog_text_third">
                                <h3 className="dog__title">pies tropiący</h3>
                                <p className="dog__text"> Podąża za wskazanym mu zapachem konkretnego człowieka,
                                    odtwarzając trasę pokonaną przez poszukiwanego.
                                    <br/><br/>Dobrze wyszkolony pies tropiący w sprzyjających warunkach potrafi podążać
                                    wiele kilometrów śladem zapachowym pozostawionym kilka dni temu.
                                    <br/><br/>W tej specjalności szczególnie ważne jest, by przewodnik potrafił
                                    perfekcyjnie odczytywać sygnały, wysyłane przez tropiącego psa. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}


