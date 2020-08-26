import React from 'react';
import './App.scss';
import Nav from "./js/Nav";
import Slider from "./js/Slider";
import Header from "./js/Header";
import WidgetsSection from "./js/WidgetsSection";


//tu function App() { return ( <> komponenty pokolei </> i export default App;
//
function App() {
  return (
      <>
      <Nav/>
      <Slider/>
      <Header/>
      <WidgetsSection/>

      </>

  );
}

export default App;
