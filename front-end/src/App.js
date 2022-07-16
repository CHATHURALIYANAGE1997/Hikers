import React from 'react';
import {BrowserRouter, BrowserRouter as Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels';
import Login from './pages/Login'
import Welcomepage from './pages/Welcomepage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
                <div className="text-center">
                    <Route> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/login"  component = {Login}></Route>
                          <Route path = "/welcome"  component = {Welcomepage}></Route>
                          <Route path = "/hotels"  component = {Hotels}></Route>

                           {/*<Route path = "/home" exact component = {}></Route> */}
                    </Route>
                </div>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
