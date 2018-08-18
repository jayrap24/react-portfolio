import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
  render() {

    const sections = ['Home', 'About', 'Portfolio', 'Contact'];
    const navLinks = sections.map(section => {
        return (
            <li><a href={"#" + section}>{section}</a></li>
        )
    });

    return (
        <nav class="navigation">
            <h1 class="logo"><a href="#">{this.props.LogoTitle}</a></h1>
                <ul class="main-nav">
                    {navLinks}
                </ul>
	    </nav> 
    );
  }
}

export default Navigation;