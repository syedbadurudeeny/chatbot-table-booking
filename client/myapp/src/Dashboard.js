import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated,logout } from "./Auth";
import { Navigate } from "react-router-dom";

function Dashboard(){

    // function leapYear(year){
    //     if(year%4 === 0){
    //     console.log("leap year")
    //     }

    //     console.log("not a leap year")
    // }

    // leapYear(2023);

    function handleClick(){
        logout();
        <Navigate to='/login' />
    }

    

    // const time = new Date().toLocaleTimeString();

    // console.log(time[8])

    const [Time,setTime]=useState();
    const [themeColor,setThemecolor]=useState("");
    const [intimate,setIntimate]=useState("");

    // console.log(typeof time[8])

    function updateTime(){
        let time = new Date().toLocaleTimeString();
        if((time[0] > 9 && time[8] === "A") ||  (time[0] < 7 && time[8] === "P")){
            setThemecolor("yellow")
            setIntimate("Open")
        }
        else{
            setThemecolor("red")
            setIntimate("Closed") 
        }
        setTime(time);
    }

    setInterval(updateTime,1000);

    if(!isAuthenticated()){
         <Navigate to={'/login'} />
      }
   
    return(
        <>
        {isAuthenticated() ? (
        <main className="dashboard-page">
            <section  className="content-edu"><h2></h2></section>
            <section className="nav-edu">
                <ul className="nav-links">
                {isAuthenticated() ? <li><Link to={'/home'} className="admin">Home</Link></li>:null}
                {isAuthenticated() ? <li><Link to={'/dashboard'} className="admin">Dashboard</Link></li> : null}

        
        {isAuthenticated() ? <li><Link to={'/chat/message'} className="admin">Chatbot</Link></li> : null}
        
        {isAuthenticated() ? <li><Link to={'/booked/table'} className="admin">BookedTable</Link></li> :null}
        
        {isAuthenticated() ? <li><Link to={'/cart'} className="admin">Cart</Link></li> :null}
    
        {isAuthenticated() ? <li><Link to={'/login'}><a href="#" onClick={handleClick} className="admin">Logout</a></Link></li> :null}
     
        {!isAuthenticated() ? <Link to={'/'} className="admin">Register</Link> :null}
       
        {!isAuthenticated() ? <Link to='/login'>Login</Link> :null}
        <h3 style={{color: themeColor}}>{Time}<span className="span">---</span>{intimate}</h3> 
                </ul>
            </section>
            
        </main>
        ) :null}
        
        </>
    )

}

export default Dashboard;