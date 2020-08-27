import React, {Component} from 'react';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert(this.input.current.value + "" + " dołącz do nas! \nNasza grupa poszukiwawczo - ratownicza wspiera Policję w akcjach poszukiwawczych. W pracy towarzyszą nam specjalnie wyszkolone psy ratownicze. Jeśli chcesz pomagać ludziom, lubisz psy i zabawę z nimi, nie boisz się nocy w lesie, chętnie spędzasz czas z ciekawymi ludźmi i pasjonuje Cię aktywny tryb życia - DOŁĄCZ DO NAS! \n\nZadzwoń do Grupy Ratowniczo Poszukiwawczej OSP Goszcza: \n608 439 323");
        event.preventDefault();
    }


    render() {
        return (
            <form className="entry_section" onSubmit={this.handleSubmit}>
                 <p className="entry__text"> Lubisz pomagać ludziom? <br/>Lubisz psy i zabawę z nimi? <br/>Lubisz spędzasz czas z ciekawymi ludźmi <br/>Pasjonuje Cię aktywny tryb życia?</p>

                    <input className="entry__input" type="text" ref={this.input} />

                <input className="entry__btn" type="submit" value="klik" />
            </form>
        );
    }
}
//
//
//     render() {
//         return (
//             <div className="entry_section">
//
//                 <p className="entry__text"> Lubisz pomagać ludziom? <br/>Lubisz psy i zabawę z nimi? <br/>Lubisz spędzasz czas z ciekawymi ludźmi <br/>Pasjonuje Cię aktywny tryb życia?</p>
//                 <p style={{color:"red", fontSize: "12px"}}>{this.state.nameErr}</p>
//                 < input className="entry__input" type="text" onChange={this.handleChange} value={this.state.name} placeholder="podaj swoje imię"/>
//                 <button className="entry__btn" onClick={this.handleClick}>Klik</button>
//             </div>
//         )
//     }
// }
//
