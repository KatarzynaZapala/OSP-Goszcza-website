//components imported from js directory:

import React from 'react';
import './App.scss';
import Nav from "./js/Nav";
import Slider from "./js/Slider";
import Header from "./js/Header";
import WidgetsSection from "./js/WidgetsSection";
import RescueSection from "./js/RescueSection";
import FireFightersSection from "./js/FireFitersSection";
import ActionSection from "./js/ActionSection";
import DogsSection from "./js/DogsSection";
import DonateSection from "./js/DonateSection";
import Footer from "./js/Footer";


function App() {
    return (

        <>
            <Nav/>
            <Slider/>
            <Header/>
            <WidgetsSection/>
            <RescueSection/>
            <FireFightersSection/>
            <ActionSection/>
            <DogsSection/>
            <DonateSection/>
            <Footer/>
        </>
    );
}

export default App;
