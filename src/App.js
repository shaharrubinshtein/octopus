import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'


import Login from './components/login'
import CustomerDisplay from './components/customerDisplay'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div className='App'>
        <CustomerDisplay/>
 
      </div>
    </Provider>
    </div>
  );
}

export default App;