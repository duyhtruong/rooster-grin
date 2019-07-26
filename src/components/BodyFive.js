import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class BodyFive extends React.Component{


    renderColumns =()=>{
        return(
                <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-50vh'> <div className='bodyText-Center'><p className='bodyTitle'>Title here</p><p>body text here</p></div> </Col>

                    <Col sm className='bodyHeight-50vh'><div className='bodyText-Center'><p>Title here</p><p>body text here</p></div></Col>
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

export default BodyFive;