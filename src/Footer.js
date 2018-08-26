import React, { Component } from 'react';
import $ from 'jquery'

import './Footer.css';

class Navigation extends Component {
    
    componentDidMount = () => {
        $('button').on('click',function(){
            alert("it works")
        })
    }
  
    render() {
    return (
      <footer>
          <button>test</button>
      </footer>
    );
  }
}  

export default Navigation;