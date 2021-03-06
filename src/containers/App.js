import React, { Component, PureComponent } from 'react';
import Main from './Main';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import { RobotList } from '../components/RobotList';
import './App.css'
import { Container, Row, Col, ColAuto, CardDeck } from 'reactstrap';
import './Scroll.css'

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

        const pullRobots = async() =>
        {
            try
            {
                const resp = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await resp.json();
                console.log(users);
                this.setState({robotList: users});
            }
            catch (error)
            {
                console.log(error);
            }
            

        }

        pullRobots();

        // fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        // {
        //     return response.json();

        // })
        // .then ((users) =>
        // {
        //     this.setState({robotList: users});
        //     console.log(this.robotList);
        // })
    }

    onSearchChanged = (event) =>
    {
        console.log(event.target.value);
        //takes keyboard entered value
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
                
                <h1 className="tc logo"> Results not Found...</h1>

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