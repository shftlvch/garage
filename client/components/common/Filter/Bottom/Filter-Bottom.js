import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Filter',
    elem: 'Bottom',
    mods({show}) {
        return {
            show
        }
    }
})