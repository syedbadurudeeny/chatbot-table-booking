// import React from 'react';
// import {Routes,Route,} from 'react-router-dom';
// import Home from './HomeFood/Home';
// import OrderDetails from './HomeFood/OrderDetails';
// import Orders from './HomeFood/Orders';
// import Upload from './HomeFood/Upload';
// import Admin from './HomeFood/Admin';
// import FoodCart from './HomeFood/FoodCart';
// import ViewDetails from './HomeFood/ViewDetails';
// import { useState } from 'react';
// import Fooddata from './HomeFood/Fooddata';
// import Stocks from './HomeFood/Stocks';
// import RegisterPage from './HomeFood/RegisterPage';
// import LoginPage from './HomeFood/LoginPage';
                              
// function App() {

//     const [showimage,setShowImage]= useState({});
//     const [cartitems,setCartitems] = useState([])
//     const [visible,setVisible] = useState(false);
//     const [products,setProducts]=useState(Fooddata);
//     const [orders,setOrders]=useState('');
//     const [totalprice,setTotalprice]=useState('');
//     const [btndisabled,setBtndisabled]=useState('');
//     const [stocks,setStocks]=useState(false);
//     const [showorders,setShoworders]=useState(false);
//     const [details,setDetails]=useState('');
//     const [Id,setId]=useState('');
//     const [cartPrice,setCartPrice]=useState();
//     const [currentDate,setCurrentDate]=useState();
//     const [isloaded,setIsloaded]=useState(false);
//     const [edit,setEdit]=useState(
//       {id:null,
//        name:"",
//        img:"",
//        price:"",
//        description:"",
//        amount:null,
//        category:"",
//        stocks:""});
  
//     function handleImage(data){
//         let display=''
//         setShowImage(data);
//       setVisible(true);
//       if(data.stocks === 0){
//         display ="none";
//         setBtndisabled(display)
//         setStocks(true)
//       }
//       else{
//         display="block";
//         setBtndisabled(display)
//       }
//    }

// function addUser(newuser){
//     newuser.amount =1;
//     newuser.id = Fooddata.length +1;
//     setProducts([...products,newuser])
//     console.log(products)
// }

// function Order(cartItem,price){
//     setOrders(cartItem)
//     setTotalprice(price);
//     setShoworders(true);
// }

// function handleOrderDetails(orderDetails,uniqueId,totalprice,date){
//     setDetails(orderDetails)
//     setId(uniqueId)
//     setCartPrice(totalprice)
//     setCurrentDate(date)
//     setIsloaded(true)
// }


// function handleEdit(item){
//     setEdit({id:item.id,name:item.name,img:item.img,price:item.price,description:item.description,amount:item.amount,category:item.category,stocks:item.stocks});
// }

// function updateProduct(id,updateFood){
//     console.log(id,updateFood)
//   setProducts(products.map(product=> (product.id === id ? updateFood : product)));
// }

// function handleDelete(id){
//  setProducts(products.filter(product=> product.id !== id))
// }
   
//     return(
//       <>
//     <Routes>
//         <Route path='/' element={<Home handleImage={handleImage} products={products} handleEdit={handleEdit} handleDelete={handleDelete} />} />
//         <Route path='/view/details' element={<ViewDetails visible={visible} showimage={showimage} cartitems={cartitems}
//          setCartitems={setCartitems} disable={btndisabled} stocks={stocks} />} />
//         <Route path='/food/cart' element={<FoodCart cartitems={cartitems} setCartitems={setCartitems} orders={Order} />} 
//           />
//         <Route path='/admin' element={<Admin/>} />
//         <Route path='/upload' element={<Upload adduser={addUser} />} />
//         <Route path='/orders' element={<Orders orders={orders}  totalprice={totalprice} showorders={showorders}
//          handleOrderDetails={handleOrderDetails}  />} />
//         <Route path='/order/details' element={<OrderDetails details={details} uniqueNum={Id}  cartPrice={cartPrice} currentDate={currentDate} isloaded={isloaded} />} /> 
//         <Route path='/stocks' element={<Stocks edit={edit} updateproduct={updateProduct}  />} />
//         <Route path='/register/page' element={<RegisterPage/>} />
//         <Route path='/login/page' element={<LoginPage/>} />
//     </Routes>
//     </>
//     )
// }


// export default App;