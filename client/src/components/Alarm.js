import React from 'react';
import Moment from "react-moment";

function Alarm(){
    const dateToFormat = '1976-04-19T12:59-0500';
        return(
            <div className="container-fluid">
            <div className="currentTime">
            <Moment>{dateToFormat}</Moment>
            </div>
            </div>
        )
}

export default Alarm;
