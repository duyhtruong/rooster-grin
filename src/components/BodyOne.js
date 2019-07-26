import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgClimb from '../assets/img-1.jpg';

class BodyOne extends React.Component{


    renderColumns =()=>{
        return(
                <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh'> <div className='bodyText-Center'><p className='bodyTitle bodyTitle-Purple'>Title here</p><p>body text here</p></div> </Col>

                    <Col sm className='bodyHeight-75vh'><img className='imgWidth-100' src={imgClimb} alt='Climb' /></Col>
                </Row>
                </Container>
        
            
        )
    }

    render(){
        return(
            <div className='bodyHeight-75vh'>
                  {this.renderColumns()}        
            </div>
        )
    }
}

export default BodyOne;