import React, {Component} from 'react';

export  default class DonateSection extends Component {
    render () {
        return (
            <section className="donate_section_container">
                <div className="donate_container">
                    <h2 className="donate_header">zadbajmy wspólnie o nasze bezpieczeństwo</h2>
                    <p className="donate_text">Osoby, które chciałyby wesprzeć działania na rzecz osób zaginionych, mogą dokonać odpisu <br/>1% podatku dla naszej grupy. W zeznaniu podatkowym należy jako beneficjenta wpisać <br/>Związek OSP RP, nr KRS 0000116212, nr rachunku Bank Pekao S.A.: <br/><b>73 1240 6074 1111 0000 4993 0359</b>. W „informacji uzupełniającej” w „celu szczegółowym” <br/>należy wpisać: GPR OSP Goszcza. <br/><br/> Można także dokonać darowizny dla naszej grupy na konto OSP Goszcza: <br/><b>49 8589 0006 0160 0680 2701 0001</b> z dopiskiem: GPR Goszcza</p>
                </div>

            </section>
        )
    }
}