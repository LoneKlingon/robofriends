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
        
            <Card className="grow">
                <CardImg top width = "25%" src={this.props.robot.rImage} alt="Robo Pic" />
        
                <CardTitle> Name: {this.props.robot.rName}</CardTitle>
                
                <CardText> {this.props.robot.email}</CardText>
        
            </Card>
      
        </div>
        

    );

    }
}

export default ACard;