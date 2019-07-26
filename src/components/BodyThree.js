import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class BodyThree extends React.Component{

    renderColumns =()=>{
        return(
                <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh'> 
                        <div className='bodyText-Center'>
                            <p className='bodyTitle'>Title here</p><p>body text here</p>
                        </div> 
                    </Col>

                    <Col sm className='bodyHeight-75vh background-Gray'>
                        <div className='bodyText-Center'>
                        <Row>
                            <Col sm> logo1 </Col>
                            <Col sm> logo2 </Col>
                        </Row>
                        <Row>
                            <Col sm> logo3 </Col>
                            <Col sm> logo4</Col>
                        </Row>
                        </div>
                    </Col>
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

export default BodyThree;