import React from 'react';
import './App.scss';
import Nav from "./js/Nav";
import Slider from "./js/Slider";
import Header from "./js/Header";
import WidgetsSection from "./js/WidgetsSection";
import RescueSection from "./js/RescueSection";
import FireFightersSection from "./js/FireFitersSection";
import Map from "./js/Map"
import ActionSection from "./js/ActionSection";


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


        </>

    );
}

export default App;
