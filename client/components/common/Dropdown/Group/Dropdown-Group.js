import React from "react";
import BEM, {decl} from "bem-react-core";

export default decl({
    block: 'Dropdown',
    elem: 'Group',
    content({label}, child) {
        return [
            label ? <BEM key="label" block="Dropdown" elem="GroupLabel">{label}</BEM> : [],
            child
            ]
    }
})