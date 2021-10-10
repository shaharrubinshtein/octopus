
import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE 

} from './login.types'

import XMLParser from 'react-xml-parser';



export function Login(operatorName, password){
    // const [messageLogin, setMessageLogin] = useState('')
    // const [isValidUser, setIsValidUser] = useState(false)

    console.log(operatorName)
    console.log(password)
    return (dispatch) => {
        dispatch(loginRequest())
        axios
        .get(`http://62.219.68.110/Web_service/WebService_Desktop.asmx/check_pasword_operator?pass=Optimum22120204&UserName=${operatorName}&Password=${password}&company=&date_k=&time_k=`)
        .then(response =>  response.data)
        .then(data => {
            console.log(data)
            const loginInfo = data

            var xml = new XMLParser().parseFromString(loginInfo)
            if(xml.children[0].children[1].value === "אלי" && xml.children[0].children[2].value === "1"){
                // setIsValidUser(true)
                // setMessageLogin('')
                console.log("logged in")
                dispatch(loginSuccess(loginInfo))
                return loginInfo
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
            dispatch(loginFailure(error.message))
        })
    }
}

export const loginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export const loginSuccess = (loginInfo) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: loginInfo
    }
}

export const loginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}