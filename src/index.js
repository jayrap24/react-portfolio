import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

class App extends Component{
    render(){
        return (
            <div>
                <Navigation LogoTitle = "Jesper Rapouw"/>
                <Header Title ="This is the welcome section" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
