export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS/HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS/IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], {type, items}) {
    switch (type) {
        case 'ITEMS/FETCH_DATA_SUCCESS':
            return items;
        default:
            return state;
    }
}