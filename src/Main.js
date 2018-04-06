import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ACard from './Card';


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
                rImage: "https://robohash.org/newtest",
                rName: "Test Bot",
                email: "botty@spacelysprockets.com"
                
                
            },
            {
                rImage: "https://robohash.org/newtest",
                rName: "Test Bot",
                email: "botty@spacelysprockets.com"
                
            },
            {
                rImage: "https://robohash.org/newtest",
                rName: "Test Bot",
                email: "botty@spacelysprockets.com"
                
            },
            
        ]
    }
        
       
    }
    
    render()
    {
        let robotCards = this.state.robots.map(robot =>
            {
                 return(
                     
                     <Col sm="4">
                     {/*This line actually passes robot to ACard.js by using props*/}
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