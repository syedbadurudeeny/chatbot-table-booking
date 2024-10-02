// import React, { useState } from 'react';
// import {Routes,Route} from 'react-router-dom';
// import Table from './Ecommerce/Table';
// import Menu from './Ecommerce/Menu';
// import Chatbot from './Ecommerce/Chatbot';
// import Home from './Ecommerce/Home';
// import BookedTable from './Ecommerce/BookedTable';
// import Data from './Ecommerce/Data';
// import Cart from './Ecommerce/Cart';
// import ChatMessage from './Ecommerce/ChatMessage';
// import Dashboard from './Ecommerce/Dashboard';
// import './Style.css';

// function App() {

//     const [cartitems,setCartitems] = useState([]);

//     const [table,setTable]= useState(Data);

//     function Bookedtable(newuser){
//         newuser.id = table.length +1;
//         setTable([...table, newuser]);
//     }

  


//     localStorage.setItem('table', JSON.stringify(table));

//     return(
  
    
//     <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/table' element={<Table booktable={Bookedtable} />} />
//         <Route path='/menu' element={<Menu  cartitems={cartitems} setCartitems={setCartitems}  />} />
//         <Route path='/chatbot' element={<Chatbot  />} />
//         <Route path='/booked/table' element={<BookedTable table={table} />} />
//         <Route path='/cart' element={<Cart cartitems={cartitems} setCartitems={setCartitems} />} />
//         <Route path='/chat/message' element={<ChatMessage  />} /> 
//         <Route path='/dashboard' element={<Dashboard/>} /> 
//     </Routes>
    
    
//     )
// }


// export default App;
