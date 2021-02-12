import React from 'react';
import "./App.css";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Hire from './Components/Hire';
import Candidate from './Components/Candidate';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';

const App = () => {
    return(
        <BrowserRouter>
        <Navbar />
        <Route exact path="/">
        <Header />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/hire">
        <Hire/>
        </Route>
        <Route path="/hirecandidate">
        <Candidate/>
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
        </BrowserRouter>
    );
}
export default App;
