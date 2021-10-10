import React, {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {MDBCard, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Login} from '../redux/Login/login.actions'


export default function OperatorsContainer () {

    //const {loginInfo} =  useSelector(state => state.loginInfo)

    const loginReducerState = useSelector(state => state.login)
    console.log(loginReducerState)


    const dispatch = useDispatch()



    const [operatorName, setOperatorName] = useState('')
    const [password, setPassword] = useState('')
    //const [messageLogin, setMessageLogin] = useState('')
    //const [isValidUser, setIsValidUser] = useState(false)

    

const handleSubmit =  (e) => {
  e.preventDefault();
  try {
    console.log(operatorName)
    console.log(password)
    dispatch(Login(operatorName, password))

    // console.log(loginInfo)
  }
  catch (error) {
    console.log(error)
  }
}

//   useEffect(() => {
//     Login()
//   }, [])
   return(
//  operator.loading ? (
//     <h2>Loading</h2>
//   ) : operator.error ? (
//     <h2>{operator.error}</h2>
//   ) : (
//     <div>
    <div>
       <MDBCard className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem', margin: '0 auto', float: 'none',  marginTop:'10%', border:'none'}}>
      <MDBCardTitle style={{textAlign:'center', fontWeight:'bold'}}>
      כניסה למערכת
      </MDBCardTitle>
      <MDBCardBody style={{alignItems:'center', alignContent:'center', verticalAlign:'middle', dir:'rtl'}}>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label style={{float:'right'}}>שם מפעיל </label>
                <input style={{maxWidth:255}} type="text" className="form-control"
                    onChange={(e) => setOperatorName(e.target.value)}
                />
            </div>
            <div className="form-group" >
                <label style={{float:'right'}}>סיסמא</label>
                <input style={{maxWidth:255}} type="password" className="form-control"  
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div className={`message ${isValidUser ? 'success' : 'error'}`}>
                    <p style={{color:'red', textAlign:'right', position:'absolute'}}>{messageUser}</p>
                </div> */}
            </div>
            {/* <div className={`message ${isValidUser ? 'success' : 'error'}`}>
              <p style={{color:'red', textAlign:'right', position:'absolute'}}>{messageLogin}</p>
            </div> */}
            <input type="submit" style={{marginBottom:40,marginTop:30, width:225, fontSize:15}} value="כניסה" className="btn btn-primary btn-block"></input>
            <div style={{textAlign:'center', marginBottom:10}}>
          </div>
      </form>
      </MDBCardBody>
    </MDBCard>      
      
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     loginData: state.loginInfo
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//    //Login: (operatorName, password) => dispatch(Login(operatorName, password))
//    Login: bindActionCreators(Login, dispatch),

//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(OperatorsContainer)