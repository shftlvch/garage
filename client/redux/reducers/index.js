import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { filter, filterApplied, filterHasErrored, filterIsLoading} from './filter';


export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    filter,
    filterApplied,
    filterHasErrored,
    filterIsLoading,
});