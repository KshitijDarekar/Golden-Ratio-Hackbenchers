import React from 'react';
import './App.css';
import  NavbarComponent from './Navbar.js'
import Introduction from './Introduction.js'
// import '/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route ,Link} from 'react-router-dom' ;
import  Example from './Example.js' ;
import  Property from './Property.js' ;
import Application from './Application.js';
import Footer from './Footer.js';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Introduction} />
          {/* <Introduction/> */}
          <Route path="/example" component={Example} />
          {/* <Example/>                  */}
          <Route path="/property" component={Property} />
          <Route path="/application" component={Application} />
        </Switch>
        <Footer/>
        
      </div>
    </BrowserRouter>
    
  );
}





export default App;
