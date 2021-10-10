import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {CustomerAdd} from '../redux/Customer/Customer.actions'
//import {CustomerDelete} from '../redux/Customer/Customer.actions'
import {findExistingCustomer} from '../redux/Customer/Customer.actions'

export default function CustomerContainer() {
    const customerReducerState = useSelector(state => state.customer)
    console.log(customerReducerState)

    const dispatch = useDispatch()

    const [customerNumber, setCustomerNumber] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [openingDate, setOpeningDate] = useState('')
    const [mobilePhoneNumber, setMobilePhoneNumber] = useState('')
    const [workPhoneNumber, setWorkPhoneNumber] = useState('')
    const [contact, setContact] = useState('')
    const [dealer, setDealer] = useState('')
    const [customerStatus, setCustomerStatus] = useState('')
    const [octopusKind, setOctopusKind] = useState('')
    const [comments, setComments] = useState('')
    const [installationPayments, setInstallationPayments] = useState('')
    const [paymentsDate, setPaymentsDate] = useState('')
    const [createDate, setCreateDate] = useState('')




useEffect(()=>{
    var today = Date.now()
    setOpeningDate(new Intl.DateTimeFormat(['ban', 'id'], {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today))
}, [])


const clear = (e) => {
    e.preventDefault()
    //console.log(customerNumber)
    if(customerNumber !== '' || customerNumber !== undefined){
        setCustomerNumber('')
    }
    setCustomerName('')
    setOpeningDate('')
    setMobilePhoneNumber('')
    setWorkPhoneNumber('')
    setContact('')
    setDealer('')
    setCustomerStatus('')
    setOctopusKind('')
    setComments('')
    setInstallationPayments('')
    setPaymentsDate('')
    setCreateDate('')
}


const handleExistingCustomer = (e) => {
    e.preventDefault();
    try{
        console.log(customerNumber)
        dispatch(findExistingCustomer(customerNumber))
        console.log("here")

        //console.log(customerReducerState.existingCustomer.children[0].children[8].value)

        console.log(customerReducerState.existingCustomer.children[0])
    }
    catch (error) {
        console.log(error)
    }
}

const handleSave = (e) => {
    e.preventDefault();
    try{


        dispatch(CustomerAdd(customerNumber, customerName, openingDate, mobilePhoneNumber, workPhoneNumber, contact, dealer, customerStatus, octopusKind, comments, installationPayments, paymentsDate, createDate))
        console.log("new customer was added")
    }
    catch (error){
        console.log(error)
    }
}

const handleDelete = (e) => {
    e.preventDefault();
    try{
       // dispatch(CustomerDelete())
    }
    catch (error){
        console.log(error)
    }
}


return (
    <div>
        <form >
        
            <div className="form-container" style={{marginTop:20, maxWidth:600, float:'right'}}>
            <div style={{marginBottom:10, textAlign:'right', marginRight:10}}>
                <label style={{fontWeight:'bold'}}>תצוגת טיפול בלקוח</label>
            </div>
            <div className="form-group1" style={{maxWidth:250, float:'right', marginRight:10}}>
                <div className="customer-number" > 

                    <label htmlFor="customerNumber" style={{float:'right'}}>מספר לקוח</label>
                    <input style={{display:'inline-flex', flexDirection:'row-reverse' , width:160}} type="text" className="form-control" id="customerNumber" style={{marginBottom: 20}}
                    onChange={(e) => setCustomerNumber(e.target.value)}/>
                    <button onClick={handleExistingCustomer} type="button" className="btn btn-secondary">הצג</button>
                   
                    
                </div>


            <label htmlFor="customerName" style={{float:'right'}}>שם לקוח</label>
            {customerReducerState.existingCustomer.length !== 0
            ?
            <input type="text" className="form-control" id="customerName" style={{textAlign: 'right', marginBottom: 20}}
             value={String(customerReducerState.existingCustomer.children[0].children[2].value)}   
             onChange={(e) => setCustomerName(e.target.value)}/>
            : 
              <input type="text" className="form-control" id="customerName" style={{textAlign: 'right', marginBottom: 20}}
              onChange={(e) => setCustomerName(e.target.value)}/>
             }
           


            <label htmlFor="openingDate" style={{float:'right'}}>תאריך פתיחה</label>
            {customerReducerState.existingCustomer.length !== 0
            // && customerReducerState.existingCustomer.children[0].children[3].value 
             ? 
            <input type="text" className="form-control" id="openingDate" style={{textAlign: 'right', marginBottom: 20}} 
             value={String(customerReducerState.existingCustomer.children[0].children[3].value)}
             onChange={(e) => setOpeningDate(e.target.value)}
             />
             : 
            <input type="text" className="form-control" id="openingDate" style={{textAlign: 'right', marginBottom: 20}} 
            value={openingDate} 
             />
             }

            


{/* select list - WEB, LOCAL   */}

            <label htmlFor="octopusKind" style={{float:'right'}}>סוג אוקטופוס</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[9].value 
            ?
            <select className="form-control" id="octopusKind" style={{marginBottom: 20}} 
             value={String(customerReducerState.existingCustomer.children[0].children[9].value)}
             onChange={(e) => setOctopusKind(e.target.value)}>
             <option style={{textAlign:'right'}} value="WEB">WEB</option>
             <option style={{textAlign:'right'}} value="LOCAL">LOCAL</option>
             </select>
             :
             <select className="form-control" id="octopusKind" style={{textAlign: 'right', marginBottom: 20}} 
             onChange={(e) => setOctopusKind(e.target.value)}>
             <option defaultValue  style={{textAlign:'right'}} value="WEB">WEB</option>
             <option style={{textAlign:'right'}} value="LOCAL">LOCAL</option>
             </select>
            }

            <label htmlFor="mobilePhoneNumber" style={{float:'right'}}>טלפון סלולרי</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[9].value 
            ?
            <input type="text" className="form-control" id="mobilePhoneNumber" style={{textAlign: 'right', marginBottom: 20}} 
            value={String(customerReducerState.existingCustomer.children[0].children[4].value)} 
             onChange={(e) => setMobilePhoneNumber(e.target.value)}/>
             :
             <input type="text" className="form-control" id="mobilePhoneNumber" style={{textAlign: 'right', marginBottom: 20}} 
              onChange={(e) => setMobilePhoneNumber(e.target.value)}/>
            }


            <label htmlFor="workPhoneNumber" style={{float:'right'}}>טלפון בעבודה</label>
            {customerReducerState.existingCustomer.length !== 0
            // && customerReducerState.existingCustomer.children[0].children[5].value 
            ?
            <input type="text" className="form-control" id="workPhoneNumber" style={{textAlign: 'right', marginBottom: 20}}
            value={String(customerReducerState.existingCustomer.children[0].children[5].value)}  
             onChange={(e) => setWorkPhoneNumber(e.target.value)}/>
             :
             <input type="text" className="form-control" id="workPhoneNumber" style={{textAlign: 'right', marginBottom: 20}}
             onChange={(e) => setWorkPhoneNumber(e.target.value)}/>
             }
            
            </div>

            <div className="form-group2" style={{maxWidth:250, float:'right', marginRight:40, display:'inline', }}>


            <label htmlFor="contact" style={{float:'right'}}>איש קשר</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[6].value 
            ?
            <input type="text" className="form-control" id="contact" style={{textAlign: 'right', marginBottom: 20}} 
             value={String(customerReducerState.existingCustomer.children[0].children[6].value)}
             onChange={(e) => setContact(e.target.value)}/>
             :
             <input type="text" className="form-control" id="contact" style={{textAlign: 'right', marginBottom: 20}} 
             onChange={(e) => setContact(e.target.value)}/>
             }


{/* select list - ממתין, פעיל, תקלה , נעול   */}

            <label htmlFor="customerStatus" style={{float:'right'}}>מצב הלקוח</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[8].value 
            ?
            <select className="form-control" id="customerStatus" style={{textAlign: 'right', marginBottom: 20}}
            value={String(customerReducerState.existingCustomer.children[0].children[8].value)}
             onChange={(e) => setCustomerStatus(e.target.value)}>
                 <option style={{textAlign:'right'}} value="ממתין">ממתין</option>
                 <option style={{textAlign:'right'}} value="פעיל">פעיל</option>
                 <option style={{textAlign:'right'}} value="תקלה">תקלה</option>
                 <option style={{textAlign:'right'}} value="נעול">נעול</option>
             </select>
            :
            <select className="form-control" id="customerStatus" style={{textAlign: 'right', marginBottom: 20}}
             onChange={(e) => setCustomerStatus(e.target.value)}>
                 <option defaultValue style={{textAlign:'right'}}value="ממתין">ממתין</option>
                 <option style={{textAlign:'right'}} value="פעיל">פעיל</option>
                 <option style={{textAlign:'right'}} value="תקלה">תקלה</option>
                 <option style={{textAlign:'right'}} value="נעול">נעול</option>
             </select>
            }


            <label htmlFor="dealer" style={{float:'right'}}>סוכן</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[7].value 
            ?
            <input type="text" className="form-control" id="dealer" style={{textAlign: 'right', marginBottom: 20}} 
            value={String(customerReducerState.existingCustomer.children[0].children[7].value)}
             onChange={(e) => setDealer(e.target.value)}/>
             :
             <input type="text" className="form-control" id="dealer" style={{textAlign: 'right', marginBottom: 20}} 
             onChange={(e) => setDealer(e.target.value)}/>
            }


            <label htmlFor="installationPayments" style={{float:'right'}}>דמי התקנה</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[11].value 
            ?
            <input type="text" className="form-control" id="installationPayments" style={{textAlign: 'right', marginBottom: 20}}  
             value={String(customerReducerState.existingCustomer.children[0].children[11].value)}
             onChange={(e) => setInstallationPayments(e.target.value)}/>
             :
             <input type="text" className="form-control" id="installationPayments" style={{textAlign: 'right', marginBottom: 20}}  
             onChange={(e) => setInstallationPayments(e.target.value)}/>
            }


            <label htmlFor="paymentsDate" style={{float:'right'}}>תאריך תשלום</label>
            {customerReducerState.existingCustomer.length !== 0
            // && customerReducerState.existingCustomer.children[0].children[12].value 
            ?
            <input type="text" className="form-control" id="paymentsDate" style={{textAlign: 'right', marginBottom: 20}} 
             value={String(customerReducerState.existingCustomer.children[0].children[12].value)}
             onChange={(e) => setPaymentsDate(e.target.value)}/>
             :
             <input type="text" className="form-control" id="paymentsDate" style={{textAlign: 'right',arginBottom: 20}} 
             onChange={(e) => setPaymentsDate(e.target.value)}/>
            }


            <label htmlFor="createDate" style={{float:'right'}}>תאריך פתיחה</label>
            {customerReducerState.existingCustomer.length !== 0 
            // && customerReducerState.existingCustomer.children[0].children[13].value 
            ?
            <input type="text" className="form-control" id="createDate" style={{textAlign: 'right', marginBottom: 20}}
             value={String(customerReducerState.existingCustomer.children[0].children[13].value)}
             onChange={(e) => setCreateDate(e.target.value)}/>
             :
             <input type="text" className="form-control" id="createDate" style={{textAlign: 'right', marginBottom: 20}}
             onChange={(e) => setCreateDate(e.target.value)}/>
            }
            <label htmlFor="comments" style={{float:'right', marginTop:40}}>הערות</label>
            {customerReducerState.existingCustomer.length !== 0 
            ?
            <input type="text" className="form-control" id="comments" style={{textAlign: 'right', marginRight: 10, height:200, width :300}}
            value={String(customerReducerState.existingCustomer.children[0].children[10].value)}
            onChange={(e) => setComments(e.target.value)}/>
            :
            <input type="text" className="form-control" id="comments" style={{textAlign: 'right', marginRight: 10, height:200, width :300, marginBottom:20}}
            onChange={(e) => setComments(e.target.value)}/>
            }
            </div>
            <div>
            <button onClick={handleDelete} type="button" className="btn btn-danger" style={{marginRight:10}}>מחיקה</button>
            <button onClick={clear} type="button" className="btn btn-secondary" style={{marginRight:10}}>ניקוי מסך</button>
            <button onClick={handleSave} type="button" className="btn btn-success" >שמור</button>
            </div>

            </div>
        </form>
    </div>
)

}