import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Table from './Table'
import Menu from './Menu';
import Chatbot from './Chatbot';
import Home from './Home';
import BookedTable from './BookedTable';
import Data from './Data';
import Cart from './Cart';
import ChatMessage from './ChatMessage';
import Dashboard from './Dashboard';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
// import './Style.css';

function App() {

    const [cartitems,setCartitems] = useState([]);

    const [table,setTable]= useState(Data);

    function Bookedtable(newuser){
        newuser.id = table.length +1;
        setTable([...table, newuser]);
    }

    localStorage.setItem('table', JSON.stringify(table));

    return(
  
    
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/table' element={<Table booktable={Bookedtable}/>} />
        <Route path='/menu' element={<Menu  cartitems={cartitems} setCartitems={setCartitems}/>} />
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/booked/table' element={<BookedTable table={table} />}/>
        <Route path='/cart' element={<Cart cartitems={cartitems} setCartitems={setCartitems}/>} />
        <Route path='/chat/message' element={<ChatMessage/>} /> 
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/' element={<RegisterPage/>}/> 
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/home' element={<Home/>}/>
    </Routes>
    
    
    )
}


export default App;
