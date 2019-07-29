import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from 'react-icons/fa'

import imgClimb from '../assets/img-1.jpg';
import Carousel from 'react-bootstrap/Carousel'

class BodyFive extends React.Component{


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
                    <div className='carouselFormat'>
                      

                    <Carousel>
  
    <div className='carouselCaption'>
   
    <p>John Doe 08/08/2019</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                                arcu at sapien consectetur aliquet. Integer quis sodales nulla. 
                                In a lectus neque. Mauris venenatis tellus diam, sit amet venenatis 
                                lorem fringilla vel. Maecenas enim lorem, pharetra vitae placerat ut, 
                                tincidunt id mauris. Mauris auctor volutpat augue non ultricies.
                    </p>

    </div>
  
  
    <div className='carouselCaption'>
   
    <p>John Doe 08/08/2019</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                                arcu at sapien consectetur aliquet. Integer quis sodales nulla. 
                                In a lectus neque. Mauris venenatis tellus diam, sit amet venenatis 
                                lorem fringilla vel. Maecenas enim lorem, pharetra vitae placerat ut, 
                                tincidunt id mauris. Mauris auctor volutpat augue non ultricies.
                    </p>

    </div>

    <div className='carouselCaption'>
   
   <p>John Doe 08/08/2019</p>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                               Morbi eget turpis vel sapien dignissim pretium. Quisque tempus 
                               arcu at sapien consectetur aliquet. Integer quis sodales nulla. 
                               In a lectus neque. Mauris venenatis tellus diam, sit amet venenatis 
                               lorem fringilla vel. Maecenas enim lorem, pharetra vitae placerat ut, 
                               tincidunt id mauris. Mauris auctor volutpat augue non ultricies.
                   </p>

   </div>
  
</Carousel>




                    </div>
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

export default BodyFive;