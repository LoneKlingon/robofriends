import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col} from 'reactstrap';
import './Hello.css';
import 'tachyons';



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
    
        <div> 
        
            <Card className="grow shadow-1 modifyH cc pa2 h-100 mb3" width ="10">
                <CardImg top width = "25%" src={this.props.robot.id} alt="Robo Pic" />
        
                <CardTitle className= "tc ma2"> Name: {this.props.robot.name}</CardTitle>
                
                <CardText className="tc"> {this.props.robot.email}</CardText>
        
            </Card>
      
        </div>
        

    );

    }
}

export default ACard;