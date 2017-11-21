import React from "react";
import BEM, {decl} from "bem-react-core";
import {connect} from "react-redux";
import {filterFetchData, filterReset, filterToggle} from "../../../redux/actions/filter";

import Bottom from "e:Bottom";
import Top from "e:Top";
import Tag from "e:Tag";
import Container from "b:Container";
import Dropdown from "b:Dropdown";
import Button from "b:Button";


export default decl({
    block: 'Filter',
    didMount() {
        this.props.fetchData('/data/filter.json');
    },
    content({filter, filterApplied, filterToggle, filterReset}, child) {
        let tags = filterApplied.map((id) => (
                <Tag key={id}
                     itemId={id}
                     onClose={(key) => filterToggle(key)}>{filter[id]}</Tag>)
            );

        return [
            <BEM key="body" elem="Body">
                <Top>
                    <Container hideXs={true} hideSm={true}>
                        <Dropdown label='Тип события' items={filter} applied={filterApplied} onChange={(key) => filterToggle(key)}/>
                    </Container>
                    <Container hideMd={true} hideLg={true}>
                        <Dropdown label='Фильтры' groups={[{label: 'Тип события', items: filter, applied: filterApplied}]}
                                  onChange={(key) => filterToggle(key)}/>
                    </Container>
                </Top>
                <Bottom show={(tags.length > 0)}>
                    <Container>
                        <BEM block="Filter" elem="TagList">
                            {tags}
                            <Button onClick={() => filterReset()}>Очистить</Button>
                        </BEM>
                    </Container>
                </Bottom>
            </BEM>,
            <Container key="cnt-items">
                {child}
            </Container>
        ]
    }
}, Filter => {
    const mapStateToProps = (state) => {
        return {
            filter: state.filter,
            filterApplied: state.filterApplied,
            hasErrored: state.filterHasErrored,
            isLoading: state.filterIsLoading
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: url => dispatch(filterFetchData(url)),
            filterToggle: key => dispatch(filterToggle(key)),
            filterReset: () => dispatch(filterReset()),
        };
    };
    return connect(mapStateToProps, mapDispatchToProps)(Filter);
});