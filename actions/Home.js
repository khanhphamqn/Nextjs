import { 
    RECEIVE_ITEMS,
    FETCH_ITEMS 
} from '../constants/Home';

export function receiveItems(payload) {
    return {
        type: RECEIVE_ITEMS,
        payload
    }
}
export function fetchItems() {
    return {
        type: FETCH_ITEMS
    }
}