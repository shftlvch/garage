import React from "react";
import {decl} from "bem-react-core";
import {connect} from "react-redux";

import {itemsFetchData} from "../../../redux/actions/items";
import makeGetFilteredItems from "../../../redux/selectors/itemSelectors";

import Card from "b:Card";

export default decl({
    block: 'List',
    didMount() {
        this.props.fetchData('/data/items.json');
    },
    content({items, filter}) {
        return items.map((item) => (
            <Card key={item.id} item={item} typeLabel={filter[item.type]}/>
        ))
    }
}, List => {
    const makeMapStateToProps = () => {
        const getFilteredItems = makeGetFilteredItems();
        return (state, props) => {
            return {
                items: getFilteredItems(state),
                filter: state.filter,
                filterApplied: state.filterApplied,
                hasErrored: state.itemsHasErrored,
                isLoading: state.itemsIsLoading
            };
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: (url) => dispatch(itemsFetchData(url))
        };
    };
    return connect(makeMapStateToProps, mapDispatchToProps)(List);
});