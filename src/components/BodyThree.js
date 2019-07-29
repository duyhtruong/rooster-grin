import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo_expertise from '../assets/home-expertise.svg';
import logo_hygiene from '../assets/home-hygiene.svg';
import logo_lab from '../assets/home-lab.svg';
import logo_retention from '../assets/home-retention.svg';

class BodyThree extends React.Component{

    renderColumns =()=>{
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
                            <a href='' className='links'> > Lorem Ipsum</a>
                        </div> 
                    </Col>

                    <Col sm className='bodyHeight-75vh background-Gray'>
                        <div className='bodyText-Center'>
                        <Row>
                            <Col className='bodyLogoText-Align' sm>
                                <div className='bodyLogo-Border'>
                                    <img className='bodyLogo' src={logo_expertise} alt='Logo Expert'/>
                                </div>
                                <p className='bodyLogo-Label'>LOREM</p>
                            </Col>
                            <Col className='bodyLogoText-Align' sm>
                                <div className='bodyLogo-Border'>
                                    <img className='bodyLogo' src={logo_hygiene} alt='Logo Expert'/>
                                </div>
                                <p className='bodyLogo-Label'>LOREM IPSUM</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='bodyLogoText-Align' sm>
                                <div className='bodyLogo-Border'>
                                    <img className='bodyLogo' src={logo_lab} alt='Logo Expert'/>
                                </div>
                                <p className='bodyLogo-Label'>LOREM</p>
                            </Col>
                            <Col className='bodyLogoText-Align' sm>
                                <div className='bodyLogo-Border'>
                                    <img className='bodyLogo' src={logo_retention} alt='Logo Expert'/>
                                </div>
                                <p className='bodyLogo-Label'>LOREM IPSUM</p>
                            </Col>
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