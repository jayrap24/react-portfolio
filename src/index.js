import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import registerServiceWorker from './components/registerServiceWorker';




class App extends Component{
    render(){
        return (
            <div>
          
                <Navigation logoTitle = {"JR"} />
                <Header Name ={"Jesper Arie Rapouw"} Phrase={"Full Stack Developer, Student, etc."} />
                <About />
                <Education />
                <Portfolio />
                <Contact />
                <Footer />
               
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
