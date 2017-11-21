import React from "react";
import {decl} from "bem-react-core";

export default decl({
    block: 'Dropdown',
    elem: 'Item',
    mods({chosen}){
        return {
            chosen,
        };
    },
    attrs({ onClick }) {
        return {
            onClick,
        };
    },
    content({label}) {
        return label;
    }
})