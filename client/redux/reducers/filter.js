export function filterHasErrored(state = false, action) {
    switch (action.type) {
        case 'FILTER/HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function filterIsLoading(state = false, action) {
    switch (action.type) {
        case 'FILTER/IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function filterApplied(state = [], {type, key}) {

    switch (type) {
        case 'FILTER/RESET':
            return [];
        case 'FILTER/TOGGLE':
            if (state.some((item) => item === key)) {
                return state.filter((item) => item !== key);
            } else {
                return [...state, key];
            }
        default:
            return state;
    }
}

export function filter(state = [], {type, filter}) {
    switch (type) {
        case 'FILTER/FETCH_DATA_SUCCESS':
            return filter;
        default:
            return state;
    }
}