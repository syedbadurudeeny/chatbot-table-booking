import { Link } from "react-router-dom";
import { isAuthenticated } from "./Auth";
function BookedTable(props){

    return(
        <>
         <main className='list-page'>
        <div className="home-dash">
        <section className="content-edu ">
                <h2></h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
            {isAuthenticated() ? <li><Link to={'/home'} className="admin">Home</Link></li>:null}
                {isAuthenticated() ? <li><Link to={'/dashboard'} className="admin">Dashboard</Link></li> : null}

        
        {isAuthenticated() ? <li><Link to={'/chat/message'} className="admin">Chatbot</Link></li> : null}
        
        {isAuthenticated() ? <li><Link to={'/booked/table'} className="admin">BookedTable</Link></li> :null}
        
        {isAuthenticated() ? <li><Link to={'/cart'} className="admin">Cart</Link></li> :null}
    
        {/* {isAuthenticated() ? <li><Link><a href="/login" onClick={handleClick} className="admin">Logout</a></Link></li> :null} */}
     
        {!isAuthenticated() ? <Link to={'/'} className="admin">Register</Link> :null}
       
        {!isAuthenticated() ? <Link to='/login'>Login</Link> :null}
            </ul>
            </section>
        </div>
        <br/>
            <section >
            <ul className='student-lists'>
            {props.table.length > 0 ?
                props.table.map(table=>{
                  return <li key={table.id} className='student-item'>
                      <h3>{`Name    : ${table.name}`}</h3>
                      <h3>{`Table Number   : ${table.tnum}`}</h3>
                      <h3>{`Phone: ${table.phone}`}</h3>
                      <h3>{`Date : ${table.date}`}</h3>
                  </li>
                }) : <h1>No Booked table</h1>
            }
                <br/>
            </ul>
            </section>
        
        </main>
        </>
    )
}

export default BookedTable;