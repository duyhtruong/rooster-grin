import React from 'react';

class Footer extends React.Component{
    
    renderFooter = () => {
        return(
            <div className='footer-Center'>
                <p>Footer</p>
                <div className='footer-Icon'>
                    <p>icon 1</p> <p>icon 2</p>
                </div>
            </div>
            )
    }
    
    render(){
        return(
            <div className='bodyHeight-25vh background-Gray'>
                {this.renderFooter()}
            </div>
        )
    }
}

export default Footer;