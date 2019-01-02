import { 
    LOADINNG_STATUS
} from '../constants/Loading';

function loadingReducer(loading = { status: false }, action){

    switch (action.type) {
        case LOADINNG_STATUS:
          	return {
          		...loading, 
          		status: action.payload
          	};
        default:
          return {...loading};
    }
}

export default loadingReducer;