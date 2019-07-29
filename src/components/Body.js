import React from 'react';
import BodyFirstRow from './BodyFirstRow';
import BodySecondRow from './BodySecondRow';
import BodyThirdRow from './BodyThirdRow';
import BodyFourthRow from './BodyFourthRow';
import BodyFifthRow from './BodyFifthRow';


class Body extends React.Component{
    render(){
        return(
            <div>
                <BodyFirstRow />
                <BodySecondRow />
                <BodyThirdRow />
                <BodyFourthRow />
                <BodyFifthRow />
            </div>
        )
    }
}

export default Body;