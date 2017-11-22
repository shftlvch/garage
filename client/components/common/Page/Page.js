import React from "react";
import {decl} from "bem-react-core";
import {Provider} from "react-redux";

import List from "b:List";
import Filter from "b:Filter";
import HelveticaNeue from "b:Font e:HelveticaNeue t:css";


export default decl({
    block: 'Page',
    render() {
        return (
            <Provider store={this.props.store}>
                <Filter>
                    <List/>
                </Filter>
            </Provider>
        )
    }
})