import React, {useState, useEffect} from 'react';
import pierwsze from"../images/pierwsze.jpg";
import fot from "../images/fot.jpg";
import fot3 from "../images/fot3.jpg";

function Carousel() {
    const [counter, setCounter] = useState(0)

    const carousel_element = () => {
        if (counter === 0) {
            return (
                <img className="carousel_img" src={pierwsze} alt="" />

            )
        }
        if (counter === 1) {
            return <img className="carousel_img" src={fot} alt="" />
        }
        if (counter === 2) {
            return <img className="carousel_img" src={fot3} alt="" />
        }
    };

    useEffect(() => {
            const timeOut = setTimeout(() => {
                    if (counter === 2) {setCounter(0)}
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
            <div><p> {carousel_element()}</p> </div>
            <i onClick={handleNext} className="fas fa-chevron-right"/>
        </div>
    );
}
export default Carousel;