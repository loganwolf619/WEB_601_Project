import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from'./components/Navbar';
import Home from'./components/Home';
import PortfolioList from './components/PortfolioList';
import Portfolio from './components/Portfolio';
import Designs from'./components/childcomponent/Designs';
import Illustrations from'./components/childcomponent/Illustrations';
import Photos from'./components/childcomponent/Photos';
import Details from'./components/Details';
import About from'./components/About';
import Contact from'./components/Contact';
import Message from'./components/Messsage';
import Register from'./components/Register';
import Cart from'./components/Cart';
import Default from'./components/Default';




class App extends Component {
  render () {
      return (
        /* React fragment allows us to simulate the html tags. It will work as a parent container, so we dont need props or unnecessary html elements*/
        <React.Fragment>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfoliolist" component={PortfolioList} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/details" component={Details} />
              <Route path="/designs" component={Designs} />
              <Route path="/illustrations" component={Illustrations} />
              <Route path="/photos" component={Photos} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/message" component={Message} />
              <Route path="/register" component={Register} />
              <Route path="/cart" component={Cart} />

              <Route component={Default} />
            </Switch>
        </React.Fragment>
      );
    }
}
export default App;
