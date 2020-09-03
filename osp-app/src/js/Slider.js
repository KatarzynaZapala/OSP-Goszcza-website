import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

//hook useState with parameters: actual state and function to change state and with initial state 0:

function Carousel() {
    const [counter, setCounter] = useState(0)


// variable that change div instead of current counter status

    const carousel_element = () => {
        if (counter === 0) {
            return (
                <div className={"foto foto3"}/>
            )
        }
        if (counter === 1) {
            return (
                <div className={"foto foto2"}/>
            )
        }
        if (counter === 2) {
            return (
                <div className={"foto foto1"}/>
            )
        }
        if (counter === 3) {
            return (
                <div className={"foto foto4"}/>
            )
        }
        if (counter === 4) {
            return (
                <div className={"foto foto5"}/>
            )
        }
        if (counter === 5) {
            return (
                <div className={"foto foto6"}/>
            )
        }
        if (counter === 6) {
            return (
                <div className={"foto foto7"}/>
            )
        }
        if (counter === 7) {
            return (
                <div className={"foto foto8"}/>
            )
        }
        if (counter === 8) {
            return (
                <div className={"foto foto9"}/>
            )
        }
        if (counter === 9) {
            return (
                <div className={"foto foto10"}/>
            )
        }
        if (counter === 10) {
            return (
                <div className={"foto foto11"}/>
            )
        }
        if (counter === 11) {
            return (
                <div className={"foto foto12"}/>
            )
        }
        if (counter === 12) {
            return (
                <div className={"foto foto13"}/>
            )
        }
        if (counter === 13) {
            return (
                <div className={"foto foto14"}/>
            )
        }
    };

/*hook useEffect to use setTimeout, that change pictures in slider after 4s.
and actualize setCounter by increased current status value by 1;
function restart when counter change (so counter is a second parameter of useEffect) */

    useEffect(() => {
            const timeOut = setTimeout(() => {
                    if (counter === 13) {
                        setCounter(0)
                    } else {
                        setCounter(prevState => prevState + 1)
                    }
                }, 4000
            );
            return () => {
                clearTimeout(timeOut);
            }
        }, [counter]
    )

/*methods that runs the setCounter method by sending as a parameter the current status value increased or decreased by 1
(to change pictures in slider by using left or right arrow):*/

    const handlePrev = () => {
        if (counter === 0) {
            setCounter(13)
        } else {
            setCounter(prevState => prevState - 1)
        }
    }

    const handleNext = () => {
        if (counter === 13) {
            setCounter(0)
        } else {
            setCounter(prevState => prevState + 1)
        }
    }

//return div with arrows that run method on click event

    return (
        <div className={"carousel"}>
            <FontAwesomeIcon className="prev_arrow" icon={faChevronLeft} onClick={handlePrev}/>
            <div className="carousel_element"> {carousel_element()}</div>

            <FontAwesomeIcon className="next_arrow" icon={faChevronRight} onClick={handleNext}/>
            <i onClick={handleNext} className="fas fa-chevron-right"/>
        </div>
    );
}

export default Carousel;