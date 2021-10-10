import {
    CUSTOMER_SUBMIT_FORM_REQUEST,
    CUSTOMER_SUBMIT_FORM_SUCCESS,
    CUSTOMER_SUBMIT_FORM_FAILURE,

    EXISTING_CUSTOMER_REQUEST,
    EXISTING_CUSTOMER_SUCCESS,
    EXISTING_CUSTOMER_FAILURE

} from  './Customer.types'

const INITIAL_STATE = {
    loading: false,
    customerSubmitInfo: [],
    existingCustomer:[],
    error:''
}

const customerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CUSTOMER_SUBMIT_FORM_REQUEST:
            return{
                ...state,
                loading: true
            }
        case CUSTOMER_SUBMIT_FORM_SUCCESS:
            return{
                ...state,
                loading:false,
                customerSubmitInfo: action.payload,
                error:''
            }
        case CUSTOMER_SUBMIT_FORM_FAILURE:
            return{
                ...state,
                loading:false,
                customerSubmitInfo: action.payload
            }

        case EXISTING_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case EXISTING_CUSTOMER_SUCCESS:
            return{
                ...state,
                loading: false,
                existingCustomer: action.payload,
                error:''
            }

        case EXISTING_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                existingCustomer: action.payload
            }

        default:
            return state;
    }
}

export default customerReducer;