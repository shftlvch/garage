import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Card',
    elem: 'Pic',
    // tag: 'div',
    attrs({ src }) {
        return {
            style : {
                backgroundImage: 'url(' + src + ')',
            },
        };
    }
}, {
    // propTypes : {
    //     src : 'string',
    // },
    defaultProps : {
        style : 'normal'
    }
})