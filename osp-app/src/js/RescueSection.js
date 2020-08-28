import React, {Component} from 'react';

export default class RescueSection extends Component {
    render() {
        return (
            <section className="container rescue_section_container">
                <div className="rescue_container" id="rescuers">
                    <div className="rescue__foto"/>
                    <div className="rescue__box">
                        <h2 className="rescue__title">tytuł</h2>
                        <p className="rescue__text">tekst</p>
                    </div>
                </div>
            </section>
        )

    }
}