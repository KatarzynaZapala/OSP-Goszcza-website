import React, {Component} from "react";



export default class DogsSection extends Component {
    render() {
        return (
            <div className="section_dog_container">
                <div className="dog_container">
                <div className="dog_box">
                    <div className="dog_header">
                        <h3>psy ratownicze</h3>
                        <p>  Psy w naszej grupie są własnością prywatną, wspólnie  ze swoim przewodnikiem (właścicielem) tworzą zespół ratowniczy. Przewodnicy sami szkolą swoje psy, korzystają jednak z wiedzy i doświadczenia instruktorów szkolenia psów ratowniczych z PSP i spoza PSP, a także z rad i pomocy doświadczonych kolegów z innych jednostek ratowniczych.  </p>
                    </div>

                </div>
                <div className="dog_box">

                    <div className="visible">
                        <div className="dog_picture dog_picture_first"/>
                    </div>

                    <div className="hidden">
                        <div className="dog_text dog_text_first">
                            <h3>Pies ratowniczy specjalność terenowa:</h3>
                            <p> przeszukuje  teren, rewirując swobodnie i szukając zapachu człowieka. Jego zadaniem jest odnaleźć znajdujące się na tym terenie osoby i poinformować o tym przewodnika, lub upewnić go, że w wyznaczonym terenie nikogo nie ma. W zależności od metody szkolenia pies tylko informuje o odnalezieniu (oszczekując), lub także doprowadza przewodnika do odnalezionego człowieka. </p>
                        </div>
                    </div>

                </div>
                <div className="dog_box">

                    <div className="visible">
                        <div className="dog_picture dog_picture_second"/>
                    </div>

                    <div className="hidden">
                        <div className="dog_text dog_text_second">
                            <h3>Pies ratowniczy specjalność gruzowiskowa: </h3>
                            <p> poszukuje osób zasypanych pod gruzami wskutek katastrof budowlanych lub trzęsień ziemi, samodzielnie przeszukuje gruzowisko i informuje przewodnika o miejscach, w których zarejestruje zapach człowieka. Musi być sprawny fizycznie, bez lęku i wahania poruszać się w trudnym, niestabilnym, często niebezpiecznym terenie, pracować w warunkach dużego zapylenia, hałasu, czasem dymu lub otwartego ognia.</p>
                        </div>
                    </div>

                </div>
                <div className="dog_box">

                    <div className="visible">
                        <div className="dog_picture dog_picture_third"/>
                    </div>

                    <div className="hidden">
                        <div className="dog_text dog_text_third">
                            <h3>pies tropiący</h3>
                            <p> odąża za wskazanym mu zapachem konkretnego człowieka, odtwarzając trasę pokonaną przez poszukiwanego. Dobrze wyszkolony pies tropiący w sprzyjających warunkach potrafi podążać wiele kilometrów śladem zapachowym pozostawionym kilka dni temu. W tej specjalności szczególnie ważne jest, by przewodnik potrafił  perfekcyjnie odczytywać sygnały, wysyłane przez tropiącego psa.  </p>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        );
    }

    }


