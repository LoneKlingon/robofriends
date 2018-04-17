import React, { Component } from 'react';
import { Container, Row, Col, ColAuto, CardDeck } from 'reactstrap';
import ACard from '../components/Card';
import 'seedrandom';
import 'tachyons'
import './Main.css'


class Main extends Component
{
    
    
    constructor(props) 
    {
        super(props);
        
      
        {/*Good place to place variables in this view*/}
        this.state = 
        {
            robots : this.props.robotList 
        
        }
        
       
    }
    
    render()
    {
        let robotCards = this.props.robotList.map((robot,i) =>
            {
                 return(
                     
                     /*This line actually passes robot to ACard.js by using props*/
                     <Col col="12" sm="6" md="4" key = {i} className= "mb3" >
                     {/*Put the card background color css class code here*/}
                        <ACard  robot = {robot} />   
                     </Col>
                )
                
            })
        
        return(
            
             <Container>
                <Row>
                 {robotCards}
                </Row>
            </Container>
        );
       
    }
}

export default Main;