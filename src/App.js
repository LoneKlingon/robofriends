import React, { Component, PureComponent } from 'react';
import Main from './Main';
import SearchBox from './SearchBox';
import 'tachyons';
import { RobotList } from './RobotList';
import './App.css'
import Scroll from'./Scroll'
import { Container, Row, Col, ColAuto, CardDeck } from 'reactstrap';
import './test.css'

class App extends PureComponent
{
    constructor()
    {
        super();

        this.state =
        {
            robotList : [],
            searchField : ""
            
        }
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        {
            return response.json();

        })
        .then ((users) =>
        {
            this.setState({robotList: users})
        })
    }

    onSearchChanged = (event) =>
    {
        console.log(event.target.value);
        this.setState({searchField: event.target.value});
       


    
    }

    render()
    {

        const filteredRobots = this.state.robotList.filter(
            (robot) =>
            {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        if (filteredRobots.length === 0)
        {
            return(
                
                <h1 className="tc logo"> Loading...</h1>

            );

        }

        else
        {
            return(
            
            
            <div>
            <div className="sticky-top nct">
                <h1 className="tc logo" > Super Robot Friends </h1>
                <div className="tc">
        
                <SearchBox onSearchChanged = {this.onSearchChanged} />
        </div>
            </div>
               
                {console.log(filteredRobots)}
                <Main robotList = {filteredRobots} />
            </div>
            
           
        );
        }
       
    }

}

export default App;