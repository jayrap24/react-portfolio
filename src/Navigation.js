import React, { Component } from 'react';
import $ from 'jquery';



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