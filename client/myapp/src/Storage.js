export const setUserdetails=(token)=>{
    localStorage.setItem("tokenId", token)
}

export const getUserdetails = ()=>{
    return localStorage.getItem("tokenId")
}

export const removeUser =()=>{
    localStorage.removeItem("tokenId");
}