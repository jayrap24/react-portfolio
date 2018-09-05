import React, { Component } from 'react';
import $ from 'jquery';


import './Navigation.css';


class Navigation extends Component {
    componentDidMount = () => {
            $(".navigation").slideUp(1).delay(500).slideDown('slow');
            
            $(".logo").click(function() {
                window.location.reload();
            });

            $("#Home").click(function() {
                window.location.reload();
            });

            $("#About").click(function() {
                $('html, body').animate({
                    scrollTop: $("#aboutComponent").offset().top
                }, 2000);
            });
            $("#Portfolio").click(function() {
                $('html, body').animate({
                    scrollTop: $("#portfolioComponent").offset().top
                }, 2000);
            });
            $("#Contact").click(function() {
                $('html, body').animate({
                    scrollTop: $("#contactComponent").offset().top
                }, 2000);
            });

    }

  render() {
    const sections = ['Home', 'About', 'Portfolio', 'Contact'];

    const navLinks = sections.map((section, index) => {
        return (
            <li key={index}><a id={section}>{section}</a></li>
        )
    });

        return (
            <nav className="navigation">
                <h1 className="logo"><a>{this.props.logoTitle}</a></h1>
                    <ul className="main-nav">
                        {navLinks}
                    </ul>
            </nav> 
        );
  }
}



export default Navigation;