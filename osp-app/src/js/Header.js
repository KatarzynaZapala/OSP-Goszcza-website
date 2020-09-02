import React, {Component} from 'react';
import OSPGoszcza from "../images/OSPGoszcza.png";
import GRPLogo from "../images/GRP-logo.jpg";

//header with maim logotypes:

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className="header_container">

                    {/*logo of volunteer Rescue Group:*/}

                    <div className="logo">
                        <a target="_blank" href="https://www.facebook.com/GPRGoszcza">
                            <img className="logo__grp" src={GRPLogo} alt="Grupa Poszukiwawczo-Ratownicza w Goszczy"/>
                        </a>
                    </div>

                    {/*main text:*/}

                    <div className="header_text">
                        <h1 className="header__title"> Grupa Poszukiwawczo Ratownicza <br/> Ochotniczej Straży
                            Pożarnej <br/>w Goszczy</h1>
                    </div>

                    {/*logo of volunteer Fire Department:*/}

                    <div className="logo ">
                        <a target="_blank" className="logo__osp" href="https://www.facebook.com/ospgoszcza">
                            <img className="logo__osp" src={OSPGoszcza} alt="Ochotnicza Straż Pożarna w Goszczy"/>
                        </a>
                    </div>

                </section>
            </header>
        );
    }
}


