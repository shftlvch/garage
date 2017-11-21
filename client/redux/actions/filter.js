import 'whatwg-fetch';

export function filterHasErrored(bool) {
    return {
        type: 'FILTER/HAS_ERRORED',
        hasErrored: bool
    };
}

export function filterIsLoading(bool) {
    return {
        type: 'FILTER/IS_LOADING',
        isLoading: bool
    };
}

export function filterFetchDataSuccess(filter) {
    return {
        type: 'FILTER/FETCH_DATA_SUCCESS',
        filter
    };
}

export function filterToggle(key) {
    return {
        type: 'FILTER/TOGGLE',
        key
    };
}

export function filterReset() {
    return {
        type: 'FILTER/RESET',
    };
}

export function filterFetchData(url) {
    return (dispatch) => {
        dispatch(filterIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(filterIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((filter) => dispatch(filterFetchDataSuccess(filter)))
            .catch(() => dispatch(filterHasErrored(true)));
    };
}