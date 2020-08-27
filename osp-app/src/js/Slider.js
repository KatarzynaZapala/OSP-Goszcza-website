import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



function Carousel() {
    const [counter, setCounter] = useState(0)

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

    const handlePrev = () => {
        if (counter === 0) {
            setCounter(2)
        } else {
            setCounter(prevState => prevState - 1)
        }
    }

    const handleNext = () => {
        if (counter === 2) {
            setCounter(0)
        } else {
            setCounter(prevState => prevState + 1)
        }
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