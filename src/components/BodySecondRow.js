import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BodySecondRow extends React.Component{
    render(){
        return(
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh bodyTwoBanner'>
                        <div className='bodyDash-Text'>
                            <p className='bodyTitle bodyTitle-Purple'>LOREM IPSUM</p>
                            <button className='buttons button-Orange'>BUTTON BUTTON</button>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        )
    }
}

export default BodySecondRow;