import React from 'react';
import BodyOne from './BodyOne';
import BodyTwo from './BodyTwo';
import BodyThree from './BodyThree';
import BodyFour from './BodyFour';
import BodyFive from './BodyFive';


class Body extends React.Component{
    render(){
        return(
            <div>
                <BodyOne />
                <BodyTwo />
                <BodyThree />
                <BodyFour />
                <BodyFive />
            </div>
        )
    }
}

export default Body;