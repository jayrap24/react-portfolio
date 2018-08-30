import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

import './Navigation.css';


class Navigation extends Component {
    componentDidMount = () => {
        $(document).ready(function(){
            $(".navigation").slideUp(1).delay(500).slideDown('slow');
        });
    }

  render() {
    const sections = ['Home', 'About', 'Portfolio', 'Contact'];
    const navLinks = sections.map(section => {
        return (
            <li><a href={"/" } id={section}>{section}</a></li>
        )
    });
        return (
            <nav class="navigation">
                <h1 class="logo"><a href="#">{this.props.logoTitle}</a></h1>
                    <ul class="main-nav">
                        {navLinks}
                    </ul>
            </nav> 
        );
  }
}



export default Navigation;