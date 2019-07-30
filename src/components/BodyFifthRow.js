import React from 'react';
import CarouselComponent from './CarouselComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaStar } from 'react-icons/fa'

//Renders fifth row in body containing two columns
//Left column contains text with star icons
//Right column contains CarouselComponent

class BodyFifthRow extends React.Component{

    //Renders two columns
    //Left text and star icons
    //Right CarouselComponent
    
    renderColumns =()=>{
        return(
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-50vh'> 
                        <div className='bodyText-Center'>
                            <p className='bodyTitle'>LOREM IPSUM DOLOR SIT AMET</p>
                            <div className='bodyIcon-Star'>
                                <div className='bodyIcon-Star-Item'><FaStar /></div> 
                                <div className='bodyIcon-Star-Item'><FaStar /></div> 
                                <div className='bodyIcon-Star-Item'><FaStar /></div> 
                                <div className='bodyIcon-Star-Item'><FaStar /></div> 
                                <div className='bodyIcon-Star-Item'><FaStar /></div> 
                            </div>
                        </div> 
                    </Col>

                    <Col sm className='bodyHeight-50vh'>
                        <CarouselComponent />
                    </Col>
                </Row>
            </Container>    
        )
    }

    render(){
        return(
            <div className='bodyHeight-50vh'>
                  {this.renderColumns()}        
            </div>
        )
    }
}

export default BodyFifthRow;