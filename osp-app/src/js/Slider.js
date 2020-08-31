import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import ReactCSSTransitionGroup from 'react-transition-group';



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
    //     console.log("test");
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

    return (
        <div className={"carousel"}>
            <FontAwesomeIcon className="prev_arrow" icon={faChevronLeft} onClick={handlePrev}/>
            {/*<i  className="fas fas-chevron-left"/>*/}
            <div className="carousel_element"> {carousel_element()}</div>
            <FontAwesomeIcon className="next_arrow" icon={faChevronRight} onClick={handleNext}/>
            {/*<i onClick={handleNext} className="fas fa-chevron-right"/>*/}
            {/*<ReactCSSTransitionGroup */}
            {/*    transitionName={transition} */}
            {/*    transitionEnterTimeout={500} */}
            {/*    transitionLeaveTimeout={500} */}
            {/*    component="div" className="carousel__slide" */}
            {/*    transitionAppear={appearTransition} */}
            {/*    transitionAppearTimeout={1000}>*/}
            {/*    <div style={style} key={this.state.counter}></div>*/}
            {/*</ReactCSSTransitionGroup>*/}
        </div>
    );
}

export default Carousel;