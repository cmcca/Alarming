import React from 'react';
import Moment from "react-moment";

var moment = require("moment");


function Alarm(){
    const now = moment();
        return(

            <Moment>{now}</Moment>

        )
}

export default Alarm;
