import React, {Component} from 'react';




class Popup extends Component{
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1 className="popup__header"> {this.props.text + " " +"dołącz do nas! "}</h1>
                    <p className="popup__text">{"Nasza grupa poszukiwawczo - ratownicza wspiera Policję w akcjach poszukiwawczych. W pracy towarzyszą nam specjalnie wyszkolone psy ratownicze. Jeśli chcesz pomagać ludziom, lubisz psy i zabawę z nimi, nie boisz się nocy w lesie, chętnie spędzasz czas z ciekawymi ludźmi i pasjonuje Cię aktywny tryb życia - dołącz do nas! "}
                    </p>
                    <p className="popup__text_2">{"Zadzwoń do Grupy Ratowniczo Poszukiwawczej OSP Goszcza:"}</p>
                    <p className="popup__number">{"608 439 323"}</p>
                    <button className="popup__btn" onClick={this.props.closePopup}>czekamy na Ciebie!</button>
                </div>
            </div>
        );
    }
}
export default class  NameApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
        this.input = React.createRef()

    }
    togglePopup(e) {
        e.preventDefault()
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <form className='entry_section' onSubmit={this.togglePopup.bind(this)}>
                <p className="entry__text"> Lubisz pomagać ludziom? <br/>Lubisz psy i zabawę z nimi? <br/>Lubisz spędzasz czas z ciekawymi ludźmi <br/>Pasjonuje Cię aktywny tryb życia?</p>
                <input className="entry__input" type="text" ref={this.input} />
                <button className="entry__btn"  >sprawdź</button>
                     {this.state.showPopup ?
                    <Popup
                        text={this.input.current.value}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </form>
        );
    }
};

