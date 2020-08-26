import React, {useState, useEffect} from 'react';
import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
import foto9 from "../images/foto9.jpg";
import foto10 from "../images/foto10.jpg";
import foto11 from "../images/foto11.jpg";
import foto12 from "../images/foto12.jpg";
import foto13 from "../images/foto13.jpg";
import foto14 from "../images/foto14.jpg";



function Carousel() {
    const [counter, setCounter] = useState(0)

    const carousel_element = () => {
        if (counter === 0) {
            return (
                <img className="carousel_img" src={foto1} alt="" />
            )}
        if (counter === 1) {
            return (
                <img className="carousel_img" src={foto2} alt="" />
            )}
        if (counter === 2) {
            return (
                <img className="carousel_img" src={foto3} alt="" />
            )}
        if (counter === 3) {
            return (
                <img className="carousel_img" src={foto4} alt="" />
            )}
        if (counter === 4) {
            return (
                <img className="carousel_img" src={foto5} alt="" />
            )}
        if (counter === 5) {
            return (
                <img className="carousel_img" src={foto6} alt="" />
            )}
        if (counter === 6) {
            return (
                <img className="carousel_img" src={foto7} alt="" />
            )}
        if (counter === 7) {
            return (
                <img className="carousel_img" src={foto8} alt="" />
            )}
        if (counter === 8) {
            return (
                <img className="carousel_img" src={foto9} alt="" />
            )}
        if (counter === 9) {
            return (
                <img className="carousel_img" src={foto10} alt="" />
            )}
        if (counter === 10) {
            return (
                <img className="carousel_img" src={foto11} alt="" />
            )}
        if (counter === 11) {
            return (
                <img className="carousel_img" src={foto12} alt="" />
            )}
        if (counter === 12) {
            return (
                <img className="carousel_img" src={foto13} alt="" />
            )}
        if (counter === 13) {
            return (
                <img className="carousel_img" src={foto14} alt="" />
            )}

    };

    useEffect(() => {
            const timeOut = setTimeout(() => {
                    if (counter === 13) {setCounter(0)}
                    else {setCounter(prevState => prevState + 1)}

                },3000
            );
            return() => {clearTimeout(timeOut);
            }
        },[counter]
    )
    const handlePrev = () => {
        if (counter === 0) {setCounter(2)}
        else {setCounter(prevState => prevState - 1)}
    }
    const handleNext = () => {
        if (counter === 2) {setCounter(0)}
        else {setCounter(prevState => prevState + 1)}
    }
    return (
        <div className={"carousel"}>
            <i onClick={handlePrev} className="fas fa-chevron-left"/>
            <div> {carousel_element()}</div>
            <i onClick={handleNext} className="fas fa-chevron-right"/>
        </div>
    );
}
export default Carousel;