import { createSelector } from 'reselect'

const getFilterApplied = (state) => state.filterApplied;

const getItems = (state) => state.items;

const makeGetFilteredItems = () => {
    return createSelector(
        [getFilterApplied, getItems],
        (filterApplied, items) => {
            if (filterApplied.length) {
                return items.filter(
                    (item) =>
                        filterApplied.some(
                            (type) => (type === item.type)
                        )
                )
            } else {
                return items
            }
        }
    )
};

export default makeGetFilteredItems