import React from "react";
import {decl} from "bem-react-core";
import moment from "moment";
import "moment/locale/ru";
moment.locale('ru');

export default decl({
    block: 'Card',
    elem: 'Time',
    content({from, to}) {
        let fromTime = moment(from),
            toTime = moment(to),
            fromFormat = 'D MMMM YYYY',
            toFormat = fromFormat;
        if (from == to) {
            return fromTime.format(fromFormat);
        }
        else if (fromTime.format('MM-YYYY') == toTime.format('MM-YYYY')) {
            fromFormat = 'D';
        }
        else if (fromTime.format('YYYY') == toTime.format('YYYY')) {
            fromFormat = 'D MMMM';
        }
        return fromTime.format(fromFormat) + ' – ' + toTime.format(toFormat);
    }
})