import { Link } from "react-router-dom";

export const myReplyFunc=(msg)=>{

    const date = new Date();
    const d=    date.getDate();
    const m=    date.getMonth();
    const y=   date.getFullYear();
    
    if(msg.includes("hai") || msg.includes("hi")){
      return "Ya, How can i help you";
    }
    else if(msg.includes("date")){
        return `Today's Date : ${d} / ${m} / ${y}`
    }
    else if(msg.includes("book a table")){
        return <Link to={'/table'}>Book A Table</Link>
    }
    else if(msg.includes("menu")){
        return <Link to={'/menu'}>Menu</Link>
    }
    return "iI didn't get you , do text again";
  
}