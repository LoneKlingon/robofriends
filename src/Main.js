import React, { Component } from 'react';
import { Container, Row, Col, ColAuto, CardDeck } from 'reactstrap';
import ACard from './Card';
import 'seedrandom';
import './Card.css';
import 'tachyons'

class Main extends Component
{
    
    
    constructor() 
    {
        super();
      
        {/*Good place to place variables in this view*/}
        this.state = 
        {
            robots :
        [
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200?200x200`,
                name: "Test Bot",
                email: "botty@spacelysprockets.com"
                
                
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: "Test Bot",
                email: "botty@spacelysprockets.com"
                
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: "Test Bot",
                email: "botty@spacelysprockets.com"
                
            },
            
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io'
            },
            {
                id: `https://robohash.org/${Math.floor((Math.random() * 10) + 1)}?200x200`,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz'
            }
    
        ]
    }
        
       
    }
    
    render()
    {
        let robotCards = this.state.robots.map(robot =>
            {
                 return(
                     
                     /*This line actually passes robot to ACard.js by using props*/
                     <Col col="12" sm="6" md="4">
                     
                        <ACard  robot = {robot} />   
                     </Col>
                )
                
            })
        
        return(
            
             <Container fluid>
                <Row>
                 {robotCards}
                </Row>
            </Container>
        );
       
    }
}

export default Main;