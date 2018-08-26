import React, { Component } from 'react';
import $ from 'jquery';

import './Header.css';

class Header extends Component {

    componentDidMount = () => {
        $(document).ready(function(){
            $(".headerName").delay(2000).fadeIn(4000);
            $(".headerPhrase").delay(3000).fadeIn(4000);
        });
    }


    render(){
        return(
            <header className="header">
                <div className="containerHeader">
                    <h1 className="headerName">{this.props.Name}</h1>
                    <span className="headerPhrase">Full Stack Developer, Student, etc.</span>
                </div>
            </header>
        );
    }

};

export default Header;