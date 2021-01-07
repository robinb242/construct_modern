
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import {
   Container
} from 'semantic-ui-react';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

import Contact from './pages/Contact/Contact';

import "./App.css";


const App = () => (
<Router>
    <div>
    <Container>
      <Nav />
        <Switch>

          <Route exact path='/' component={Home} />
          
          <Route path='/contact' component={Contact} />
         


      </Switch>

      
      <Footer />
      </Container>
    </div>
 </Router>

);

export default App;