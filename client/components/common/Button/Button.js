import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Button',
    attrs({onClick}) {
        return {
            onClick
        }
    }
})