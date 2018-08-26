import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';




class App extends Component{
    render(){
        return (
            <div>
          
                <Navigation LogoTitle = "JR"/>
                <Header Name ="Jesper Rapouw" />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
               
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
