import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
const App =()=>{
     return(
      <div>
       <Navigation/>
       <Home/>
       <Footer/>
      </div>
     )
}

export default App;