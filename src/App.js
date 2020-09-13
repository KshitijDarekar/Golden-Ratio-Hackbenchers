import React from 'react';
import './App.css';
import  NavbarComponent from './Navbar.js'
import Introduction from './Components/Home/Introduction.js'
import { BrowserRouter , Switch , Route } from 'react-router-dom' ;
import  Example from './Components/Examples/Example.js' ;
import  Mathematics from './Components/Mathematics/Mathematics.js' ;
import Application from './Components/Application/Application.js';
import Footer from './Footer.js';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Introduction} />
          <Route path="/example" component={Example} />
          <Route path="/mathematics" component={Mathematics} />
          <Route path="/application" component={Application} />
          {/* <Route path="/more" component={More} /> */}
        </Switch>
        <Footer/>
        
      </div>
    </BrowserRouter>
    
  );
}





export default App;
