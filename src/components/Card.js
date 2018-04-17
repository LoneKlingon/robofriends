import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col} from 'reactstrap';
import 'tachyons';
import './Card.css';



//bypasses the need to create a class; refer to Hello
class ACard extends Component
{
      constructor(props) 
    {
        super(props);
    }
    
    render()
    {
        return(
        /* Appears to require both div and card tags to have h-100 in order to display even height carsd */

        <div className="h-100"> 
            {/*Put the card background color css class code here or try Main.js it is very buggy*/}

            <Card className="grow shadow-1 modifyH bc" width ="10">
                <CardImg top width = "25%" src={`https://robohash.org/${Math.floor((Math.random() * 1000) + 1)}`} alt="Robo Pic" />
        
                <CardTitle className= "tc"> Name: {this.props.robot.name}</CardTitle>
                
                <CardText className="tc"> {this.props.robot.email}</CardText>
        
            </Card>
      
        </div>
        

    );

    }
}

export default ACard;