import axios from 'axios'
import {
    CUSTOMER_SUBMIT_FORM_REQUEST,
    CUSTOMER_SUBMIT_FORM_SUCCESS,
    CUSTOMER_SUBMIT_FORM_FAILURE,


    EXISTING_CUSTOMER_REQUEST,
    EXISTING_CUSTOMER_SUCCESS,
    EXISTING_CUSTOMER_FAILURE

} from  './Customer.types'

import XMLParser from 'react-xml-parser';

export function findExistingCustomer(customerNumber){
    console.log(customerNumber)
    return (dispatch) => {
        dispatch(existingCustomerRequest())
        axios
        .get(`http://62.219.68.110/Web_service/WebService_Desktop.asmx/customer_data_SELECT?pass=Optimum22120204&number_customer=${customerNumber}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
             var xml = new XMLParser().parseFromString(data)
             console.log(xml)
             if(xml.children[0].children[0].name === "id_num" && xml.children[0].children[0].value === "111"){
                // setIsValidUser(true)
                // setMessageLogin('')
                console.log("user")
                dispatch(existingCustomerSuccess(xml))
                console.log(xml)
                return xml
                //inboxMessage(operatorName)
              //   .then(resMessage => {console.log(resMessage)
              //   var xmlMessages = new XMLParser().parseFromString(resMessage)
              //   console.log(xmlMessages)
              //   })
              }
            //   else{
            //     setIsValidUser(false)
            //     setMessageLogin('משתמש לא קיים')
            //   }
              // })

        
        })
        .catch(error => {
            dispatch(existingCustomerFailure(error.message))
        })

    
    }
}

//31197593



export function CustomerAdd(customerNumber, customerName, openingDate, mobilePhoneNumber, workPhoneNumber, contact, dealer, customerStatus, octopusKind, comments, installationPayments, paymentsDate, createDate ){
    console.log("add new customer")
    console.log(customerNumber)
    console.log(customerName)
    console.log(openingDate)
    console.log(mobilePhoneNumber)
    console.log(workPhoneNumber)
    console.log(contact)
    console.log(dealer)
    console.log(customerStatus)
    console.log(octopusKind)
    console.log(comments)
    console.log(installationPayments)
    console.log(paymentsDate)
    console.log(createDate)

    return (dispatch) => {
        dispatch(customerSubmitRequest())
        axios
        .get(`http://62.219.68.110/Web_service/WebService_Desktop.asmx/customer_InsertUpdate?licensed_dealer=${customerNumber}&name_customer=${customerName}$tb_date_open=${openingDate}&telephone_mobil=${mobilePhoneNumber}&telephone_work=${workPhoneNumber}&tb_contact=${contact}&tb_dealer=${dealer}&situation=${customerStatus}&tb_kind_octopus=${octopusKind}&Tb_memo=${comments}&tb_pay_install=${installationPayments}&tb_pay_date=${paymentsDate}&tb_Creat_date=${createDate}&kind=`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
             var xml = new XMLParser().parseFromString(data)
             console.log(xml)
        })
    }
}

// export function CustomerDelete(customerNumber, customerName, openingDate, mobilePhoneNumber, workPhoneNumber, contact, dealer, customerStatus, octopusKind, comments, installationPayments, paymentsDate, createDate ){
//     return (dispatch) => {
//         dispatch(customerSubmitRequest())
//         axios
//         .get(`http://62.219.68.110/Web_service/WebService_Desktop.asmx/customer_InsertUpdate?licensed_dealer=${customerNumber}&name_customer=${customerName}$tb_date_open=${openingDate}&telephone_mobil=${mobilePhoneNumber}&telephone_work=${workPhoneNumber}&tb_contact=${contact}&tb_dealer=${dealer}&situation=${customerStatus}&tb_kind_octopus=${octopusKind}&Tb_memo=${comments}&tb_pay_install=${installationPayments}&tb_pay_date=${paymentsDate}&tb_Creat_date=${createDate}&kind="מחיקה"`)
//         .then(response => response.data)
//         .then(data => {
//             console.log(data)
//             //const customerSubmitInfo = data
//             var xml = new XMLParser().parseFromString(data)
//             console.log(xml)
//         })
//     }
// }

//fetching existing customer by customer_number
export const existingCustomerRequest = () => {
    return {
        type: EXISTING_CUSTOMER_REQUEST
    }
}

export const existingCustomerSuccess = (existingCustomer) => {
    return {
        type: EXISTING_CUSTOMER_SUCCESS,
        payload: existingCustomer
    }
}

export const existingCustomerFailure = (error) => {
    return {
        type: EXISTING_CUSTOMER_FAILURE,
        payload: error
    }
}



// update customer details
export const customerSubmitRequest = () => {
    return {
        type: CUSTOMER_SUBMIT_FORM_REQUEST
    }
}

export const customerSubmitSuccess = (customerSubmitInfo) => {
    return {
    type:CUSTOMER_SUBMIT_FORM_SUCCESS,
    payload: customerSubmitInfo
    }
}

export const customerSubmitFailure = (error) => {
    return {
        type: CUSTOMER_SUBMIT_FORM_FAILURE,
        payload: error
    }
}