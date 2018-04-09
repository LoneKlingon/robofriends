import React, { Component } from 'react';
import Main from './Main';
import SearchBox from './SearchBox';
import 'tachyons';
import { RobotList } from './RobotList';
import './App.css'
import Scroll from'./Scroll'
class App extends Component
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
                <h1 className="tc logo"> Super Robot Friends </h1>
                <div className="tc">
                <SearchBox onSearchChanged = {this.onSearchChanged} />
                </div>
                {console.log(filteredRobots)}
                <Scroll>
                <Main robotList = {filteredRobots} />
                </Scroll>
            </div>
            
           
        );
        }
       
    }

}

export default App;