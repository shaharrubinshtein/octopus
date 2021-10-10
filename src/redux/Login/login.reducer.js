import{
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE 
} from './login.types'

const INITIAL_STATE = {
    loading:false,
    loginInfo:[],
    error:''
}


const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                loginInfo: action.payload,
                error:''
            }
        case FETCH_LOGIN_FAILURE:
            return{
                ...state,
                loading: false,
                loginInfo: action.payload
            }

        default:
            return state;
    }
}


export default loginReducer;


