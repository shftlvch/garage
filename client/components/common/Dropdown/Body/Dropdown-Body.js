import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Dropdown',
    elem: 'Body',
    attrs({ onClick }) {
        return {
            onClick : onClick
        };
    },
    content({}, child) {
        return child;
    }
})