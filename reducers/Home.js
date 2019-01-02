import { 
    RECEIVE_ITEMS
} from '../constants/Home';

function homeReducer(home = {data: []}, action){
    switch (action.type) {
        case RECEIVE_ITEMS:
          	return {
          		...home,
          		data: action.payload
          	};
        default:
          	return {...home};
    }
}

export default homeReducer;