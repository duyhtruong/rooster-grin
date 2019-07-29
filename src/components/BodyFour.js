import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BodyFour extends React.Component{
    render(){
        return(
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh bodyFourBanner'> 
                        <div className='bodyDash-Text-Right'>
                            <p className='bodyTitle bodyTitle-Purple'>LOREM IPSUM</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                            arcu at sapien consectetur aliquet.  
                            </p>
                            <button className='buttons button-Orange'>BUTTON BUTTON</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BodyFour;