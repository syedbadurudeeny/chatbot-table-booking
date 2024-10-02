import { useState } from "react";
import { myReplyFunc } from "./Func";
import Chatbot from "./Chatbot";
import { Link } from "react-router-dom";

function ChatMessage(){

    const [message,setMessage]=useState([{message : "Hi there , May i know your name"}]);
    const [text,setText]= useState("");

    function handleClick(){
      let list =[...message,{message : text,user : true}];

      if(list.length > 2){
        const reply = myReplyFunc(text);

        list=[
          ...list,{message:reply}
        ]
      }
      else{
        list=[...list, {message : `Hi, ${text}`}, { message : "How can i help you"}];
      }
      setMessage(list); 
      setText('');
    }

    // setTimeout(()=>{
    //   document.getElementsByClassName("copyRights").scrollintoView();
    // },1)


    return(
        <>
<main className="chat-chat">


<div className="cart-page">
        <h2><Link to={'/dashboard'} className="cart-content">home</Link></h2>
        </div>
        <div className="chat-main">

      

             <h3>Chat-Bot</h3>
             <br/>
            {message.length > 0 && message.map((data)=> <Chatbot {...data} />)}
   

            <div className="inputs">
            <input type="text" name="text" id="text" className="text" onChange={(e)=>setText(e.target.value)} value={text} />
            <button className="btn-chat" onClick={handleClick}>Send</button>
            <footer className="copyRights">Copy Rights</footer>
            </div>


        </div>

</main>
        </>
    )
}


export default ChatMessage;