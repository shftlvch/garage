import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Container',
    mods({hideXs, hideSm, hideMd, hideLg}) {
        return {
            hideXs, hideSm, hideMd, hideLg
        }
    }
})