import React from "react";
import {decl} from "bem-react-core";
import Bem from 'bem-react-core';

export default decl({
    block: 'Card',
    elem: 'Location',
    content(props, children) {
        return [
            <Bem key="marker" elem="Marker" tag="span"/>,
            `${children}`
        ]
    }
})