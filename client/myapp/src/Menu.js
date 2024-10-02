import Menuitemsdata from "./Menuitemsdata";
import { useState } from "react";
import { Link } from "react-router-dom";

function Menu(props){

    const {FastfoodItems,BriyaniItems,FreshjuiceItems,FaloodaItems,SnaksItems} = Menuitemsdata;

    const [warning,setWarning] = useState(false);

    function handleClick(item){
        let isPresent;

        props.cartitems.forEach((cart)=>{
              if(item.id === cart.id){
                  isPresent=true;
              }
          })

          if(isPresent){
            setWarning(true)
            return '';
          }
        props.setCartitems([...props.cartitems,item]);
  
      }

    return(
        <>
        {/* <h1>Menu Component</h1> */}
        {warning && alert('Already Product Exits In Cart')}
        <main className="cart">
        <div className="page">
        <h2><Link to={'/dashboard'} className="home-content">dashboard</Link></h2>
        </div>
        <section>
            <h2>FastFoods Varieties</h2>
            {
                FastfoodItems.map(food=>(
                    <div key={food.id} className="cart-items">
                        <h3>{food.S_No}</h3>
                        <h3>{food.name}</h3>
                        <h3>{food.price}</h3>
                        <button onClick={()=>handleClick(food)}>ADD TO CART</button>
                    </div>
                ))
            }
        </section>

        <section>
            <h2>Briyani Varieties</h2>
            {
                BriyaniItems.map(briyani=>(
                     <div key={briyani.id} className="cart-items">
                        <h3>{briyani.S_No}</h3>
                        <h3>{briyani.name}</h3>
                        <h3>{briyani.price}</h3>
                        <button onClick={()=>handleClick(briyani)}>ADD TO CART</button>
                    </div>
                ))
            }
        </section>

        <section>
            <h2>FreshJuice Varieties</h2>
            {
                FreshjuiceItems.map(fresh=>(
                     <div key={fresh.id} className="cart-items">
                        <h3>{fresh.S_No}</h3>
                        <h3>{fresh.name}</h3>
                        <h3>{fresh.price}</h3>
                        <button onClick={()=>handleClick(fresh)} >ADD TO CART</button>
                    </div>
                ))
            }
        </section>

        <section>
            <h2>Falooda Varieties</h2>
            {
                FaloodaItems.map(falooda=>(
                     <div key={falooda.id} className="cart-items">
                        <h3>{falooda.S_No}</h3>
                        <h3>{falooda.name}</h3>
                        <h3>{falooda.price}</h3>
                        <button onClick={()=>handleClick(falooda)} >ADD TO CART</button>
                    </div>
                ))
            }
        </section>

        <section>
            <h2>Snaks Varieties</h2>
            {
                SnaksItems.map(snaks=>(
                     <div key={snaks.id} className="cart-items">
                        <h3>{snaks.S_No}</h3>
                        <h3>{snaks.name}</h3>
                        <h3>{snaks.price}</h3>
                        <button onClick={()=>handleClick(snaks)} >ADD TO CART</button>
                    </div>
                ))
            }
        </section>
        </main>
        </>
    )
}

export default Menu;