import React from "react";
import Bem, {decl} from "bem-react-core";

import Section from "e:Section";
import Pic from "e:Pic";
import Location from "e:Location";
import Time from "e:Time";

export default decl({
    block: 'Card',
    attrs({item}) {
        return {
            'key': item.id,
        };
    },
    content({item, typeLabel}) {
        return [
            <Section key="section" >{typeLabel}</Section>,
            <Bem key="title"  elem="Title">
                {item.title}
            </Bem>,
            <Location key="location" >{item.location}</Location>,
            <Time key="time" from={item.start_date} to={item.end_date}/>,
            <Pic key="pic"  src={item.image_url}/>
        ]
    }
});