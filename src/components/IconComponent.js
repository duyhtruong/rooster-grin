import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo_expertise from '../assets/home-expertise.svg';
import logo_hygiene from '../assets/home-hygiene.svg';
import logo_lab from '../assets/home-lab.svg';
import logo_retention from '../assets/home-retention.svg';

//Renders animated SVG Icons

class IconComponent extends React.Component{
    render(){
        return(
            <Col sm className='bodyHeight-75vh background-Gray'>
                <div className='bodyText-Center'>
                    <Row>
                    {/* First Icon */}
                        <Col sm className='bodyLogoText-Align'>
                            <div className='bodyLogo-Border animated infinite tada delay-2s slower'>
                                <img 
                                    className='bodyLogo' 
                                    src={logo_expertise}
                                    alt='Logo Expert'
                                />
                            </div>
                            <p className='bodyLogo-Label'>LOREM</p>
                        </Col>
                    {/* Second Icon */}
                        <Col sm className='bodyLogoText-Align'>
                            <div className='bodyLogo-Border animated infinite tada delay-2s slower'>
                                <img 
                                    className='bodyLogo' 
                                    src={logo_hygiene} 
                                    alt='Logo Expert'
                                />
                            </div>
                            <p className='bodyLogo-Label'>LOREM IPSUM</p>
                        </Col>
                    </Row>

                    <Row>
                    {/* Third Icon */}
                        <Col sm className='bodyLogoText-Align'>
                            <div className='bodyLogo-Border animated infinite tada delay-2s slower'>
                                <img 
                                    className='bodyLogo' 
                                    src={logo_lab} 
                                    alt='Logo Expert'
                                    />
                            </div>
                            <p className='bodyLogo-Label'>LOREM IPSUM</p>
                        </Col>
                    {/* Fourth Icon */}
                        <Col sm className='bodyLogoText-Align'>
                            <div className='bodyLogo-Border animated infinite tada delay-2s slower'>
                                <img 
                                    className='bodyLogo' 
                                    src={logo_retention} 
                                    alt='Logo Expert'
                                />
                            </div>
                            <p className='bodyLogo-Label'>LOREM</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}

export default IconComponent;

