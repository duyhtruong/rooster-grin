import React from 'react';
import IconComponent from './IconComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Renders third row in body containing two columns
//Left column contains text, right column contains SVG IconComponent

class BodyThirdRow extends React.Component{

    renderColumns = () =>{
        return(
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh'> 
                        <div className='bodyText-Center'>
                            <p className='bodyTitle'>LOREM IPSUM DOLOR SIT AMET</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                                arcu at sapien consectetur aliquet. Integer quis sodales nulla. 
                            </p>
                            <a 
                                href='https://www.roostergrin.com/' 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                className='links'> > Lorem Ipsum
                            </a>
                        </div> 
                    </Col>
                    <IconComponent />
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

export default BodyThirdRow;