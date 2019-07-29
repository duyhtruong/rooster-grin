import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from 'react-icons/fa'

import CarouselComponent from './CarouselComponent';

class BodyFifthRow extends React.Component{

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