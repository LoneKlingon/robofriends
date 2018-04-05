import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';

//syntax to create a component named Hello must extend Component Class
class Hello extends Component
{
    //Displays the results
    render()
    {
        return(
        <div className="tc">
            {/*must use className in react*/}
            <h1 className ="f1"> Hello World </h1>
            <p> {this.props.greeting} </p>

        </div>

        );
        
    }
}

//exports the module for use in other files
export default Hello;