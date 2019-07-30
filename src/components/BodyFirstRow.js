import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgClimb from '../assets/img-1.jpg';



class BodyFirstRow extends React.Component{

    renderColumns =()=>{
        return(
                <Container fluid={true}>
                <Row noGutters={true}>
                    <Col sm className='bodyHeight-75vh'> 
                        <div className='bodyText-Center'>
                            <p className='bodyTitle bodyTitle-Purple'>LOREM IPSUM</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                                arcu at sapien consectetur aliquet. Integer quis sodales nulla. 
                                In a lectus neque. Mauris venenatis tellus diam, sit amet venenatis 
                                lorem fringilla vel. Maecenas enim lorem, pharetra vitae placerat ut, 
                                tincidunt id mauris. Mauris auctor volutpat augue non ultricies.
                            </p>
                            <a href='' className='links'> > Lorem Ipsum</a>
                        </div> 
                    </Col>

                    <Col sm className='bodyMobileHeight-50vh'><img className='imgWidth-100' src={imgClimb} alt='Climb' /></Col>
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

export default BodyFirstRow;