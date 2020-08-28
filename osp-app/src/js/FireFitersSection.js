import React, {Component} from 'react';

export default class FireFightersSection extends Component {
    render() {
        return (
            <section className="container fire_section_container">
                <div className="fire_container">
                    <div className="fire__box" id="firefighters">
                        <h2 className="fire__title">tytuł</h2>
                        <p className="fire__text">tekst</p>
                    </div>


                    <div className="fire__foto">foto</div>

                </div>
            </section>
        )

    }
}