
function Chatbot(props){

    return(
        <>
         <main>
            {
                props.message ? (
                    <span>
                        <span>{props.message}</span>
                    </span>
                ) : (
                    <span>
                        <span>{props.message}</span>
                    </span>
                )
            }
         </main>
         
        </>
    )

}

export default Chatbot;