import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

class CarouselComponent extends React.Component{
    
    renderNextIcon = () => {
        return(
            <span className='customNextIcon'>
            <IoIosArrowForward />
            </span>
        )
    }

    renderPrevIcon = () => {
        return(
            <span className='customPrevIcon'>
            <IoIosArrowBack />
            </span>
        )
    }
    
    render(){
        return(
            <div className='carouselFormat'>
                <Carousel
                    nextIcon={this.renderNextIcon()}
                    prevIcon={this.renderPrevIcon()}
                >
                    <div className='carouselCaption'>
                        <p className='carouselCaption-Title'>John Doe 08/08/2019</p>
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
                        <p className='carouselCaption-Title'>Jane Doe 05/10/2018</p>
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
                        <p className='carouselCaption-Title'>John Doe 08/08/2019</p>
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
        )
    }
}

export default CarouselComponent;




