import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Nav from './Nav.js';
import Body from './Body.js';
import Footer from './Footer.js';
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <section >
          <div className="col" id='logo' >
        <img  src={logo} />
        </div>
        <div className='col'>
          <span className='hole'/>
        </div>
        </section>
      
      <div className='row'>
    
      <div className='col-lg-3 allign-items-left '><Nav /></div>
      <div className='col' id="bg-img"><Body /></div>
      </div>
      <Footer />
     
      </header>
      
    </div>
  );
}

export default App;
