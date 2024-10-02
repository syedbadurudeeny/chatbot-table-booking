import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart({cartitems,setCartitems}){

  const navigate=useNavigate()

   const [price,setPrice]= useState(0);

   function handlePrice(){
    let ans=0;
    cartitems.forEach((item)=>{
        ans+= item.amount * item.price;
   })
  setPrice(ans)
   }

   function handleRemove(id){
    let cart = cartitems.filter(cart=>cart.id !== id)
    setCartitems(cart)
   }

   useEffect(()=>{
       handlePrice()
   })

   function handleClick(item,a){
    let ind="";
      cartitems.find((cart,index)=>{
        if(cart.id === item.id){
          ind=index;
        }
      })

      let tempArr = cartitems;
      tempArr[ind].amount += a;
      if(tempArr[ind].amount === 0){
        tempArr[ind].amount =1;
      }

      setCartitems([...tempArr]);
   }

   function handlePay(){
    let amount= price;
    if(amount === ""){
      return ""
    }else{
      let options = {
        key: "rzp_test_gf7PyXCKbi1xer",
        secret_key : "S5P7zrAny3BEu5o6BKCRk1DA",
        amount: amount * 100,
        currency :  "INR",
        name: "Normal Pay",
        description : "For checking payment here..",
        handle : function(response){
          alert(response.razorpay_payment_id)
        },
        prefill :{
          name :"syed",
          email: "baduru2010@gmail.com",
          contact: "6383304335",
        },
        notes :{
          address : "Razorpay private limited"
        },
        theme: {
          color : '#FF0000'
        }
      }
      let pay= new window.Razorpay(options);
      pay.open();
    }
    setCartitems('');
    navigate('/home')
   }


    return(
        <>
        
        {/* <h2>Cart Component</h2> */}
        <main  className="cart">
        <div className="cart-page">
        <h2><Link to={'/dashboard'} className="cart-content">home</Link></h2>
        </div>
          <br/>
          <br/>
          <br/>
          <br/>
        <h3 className="cart-text">CART ITEMS</h3>
{       cartitems.map((cart) =>(
         <div key={cart.id}  className="cart-items">
          {/* {console.log(cart)} */}
         <h3>{cart.S_No}</h3>
         <h3>{cart.name}</h3>
         <h3>{cart.price}</h3> 

         <button onClick={()=>handleClick(cart, +1)}>+</button>
         <h3>{cart.amount}</h3>
         <button onClick={()=>handleClick(cart, -1)}>-</button>

         <h3>{`Surtotal ${cart.price}`}</h3>
         <button onClick={()=>handleRemove(cart.id)}>Remove</button>
         </div>
))
}
        <div  className="cartPrice">
         <h3 className="total-cart-price">{`Total Cart Price : ${price}`}</h3>
         <button  className="cart-btn" onClick={handlePay}>Pay</button>
        </div>
        </main>
        </>
    )
}

export default Cart;