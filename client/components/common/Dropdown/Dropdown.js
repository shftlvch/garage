import React from "react";
import Bem, {decl} from "bem-react-core";

import Item from "e:Item";
import Group from "e:Group";
import Body from "e:Body";
import Container from "b:Container";

export default decl({
    block: 'Dropdown',
    willInit() {
        this.state = {
            opened: false,
        };

        this.toggle = this.toggle.bind(this);
        this.choose = this.choose.bind(this);
        this.itemList = this.itemList.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    },
    didMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    },
    willUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    },
    setWrapperRef(node) {
        this.wrapperRef = node;
    },
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({opened: false});
        }
    },
    choose(key) {
        this.props.onChange(key);
    },
    toggle() {
        let opened = !this.state.opened;
        this.setState({opened});
    },
    mods() {
        return {
            opened: this.state.opened
        };
    },
    attrs() {
        return {
            ref: this.setWrapperRef
        }
    },
    itemList(filter, applied) {
        let list = [];
        for(let key in filter) {
            if(filter.hasOwnProperty(key)) {
                list.push(<Item
                    key={key}
                    value={key}
                    label={filter[key]}
                    chosen={applied.includes(key)}
                    onClick={() => this.choose(key)}/>)
            }

        }
        return list;
    },
    content({groups, items, applied, label}) {
        let grouped = true;
        if (!groups) {
            groups = [{items, applied}];
            grouped = false
        }
        let itemLists = groups.map(
            ({items, applied, label}, index) =>
                <Group key={index} label={label}>
                    {
                        this.itemList(items, applied)
                    }
                </Group>
        );

        return [
            <Body key="body" onClick={this.toggle}>
            {label}
            </Body>,
            <Bem key="dropdown" block="Dropdown" elem="Items">
                {grouped ? <Container>{itemLists}</Container> : itemLists}
            </Bem>
        ]
    }
});

