import React, { Component } from 'react';
import Main from './Main';
import SearchBox from './SearchBox';
import 'tachyons';
import { RobotList } from './RobotList';
import './App.css'


class App extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            robotList : RobotList,
            searchField : ""
            
        }
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

        return(
            <div>
                <h1 className="tc logo"> Super Robot Friends </h1>
                <div className="tc mb3">
                    <SearchBox onSearchChanged = {this.onSearchChanged} />
                </div>
                {console.log(filteredRobots)}
                <Main robotList = {filteredRobots} />
            </div>
        );
    }

}

export default App;