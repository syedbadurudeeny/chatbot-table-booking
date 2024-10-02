import { Link } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import { useState, useEffect } from "react";

function Home(){

    const [source,setSource]=useState()

    function locateMe(){

        navigator.geolocation.getCurrentPosition((position)=>{
            let lat=position.coords.latitude;
            let lon=position.coords.longitude;

            console.log(lat,lon)
            
            setSource(`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`)
        })
    }

    useEffect(()=>{
        locateMe()
    },[])


    return(
        <>



        <div className="dashboard-page">
        <h2><Link to={'/dashboard'} className="home-content">dashboard</Link></h2>
        {/* <section  className="content-edu"><h2></h2></section>
            <section className="nav-edu home">
                <ul className="nav-links">
                {isAuthenticated() ? <li><Link to={'/home'} className="admin">Home</Link></li>:null}
                {isAuthenticated() ? <li><Link to={'/dashboard'} className="admin">Dashboard</Link></li> : null}

        
        {isAuthenticated() ? <li><Link to={'/chat/message'} className="admin">Chatbot</Link></li> : null}
        
        {isAuthenticated() ? <li><Link to={'/booked/table'} className="admin">BookedTable</Link></li> :null}
        
        {isAuthenticated() ? <li><Link to={'/cart'} className="admin">Cart</Link></li> :null} */}
    
        {/* {isAuthenticated() ? <li><Link><a href="/login" onClick={handleClick} className="admin">Logout</a></Link></li> :null} */}
     
        {/* {!isAuthenticated() ? <Link to={'/'} className="admin">Register</Link> :null}
       
        {!isAuthenticated() ? <Link to='/login'>Login</Link> :null}
        
                </ul>
            </section> */}
            <section className="maps">
                <iframe src={source} width="300%" height="70%" loading="lazy"></iframe>
            </section>
        
        </div>
           {/* <div className="timingColor" style={{width:"100%", height:"100%", backgroundColor:themeColor}}>
        {Time} {intimate}
        </div> */}
        </>
    )
}

export default Home;