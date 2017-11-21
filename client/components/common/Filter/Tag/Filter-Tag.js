import React from "react";
import BEM, {decl} from "bem-react-core";

export default decl({
    block: 'Filter',
    elem: 'Tag',
    content({itemId, onClose}, child) {
        return [
            <BEM key="body" block="Filter" elem="TagBody">{child}</BEM>,
            <BEM key="close" block="Filter" elem="TagClose" attrs={{ onClick: () => onClose(itemId)}}/>
        ]
    }
})