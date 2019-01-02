import { 
    LOADINNG_STATUS
} from '../constants/Loading';

export function loadingStatus(payload) {
    return {
        type: LOADINNG_STATUS,
        payload
    }
}