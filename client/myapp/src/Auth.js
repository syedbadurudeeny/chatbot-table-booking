import { getUserdetails, removeUser } from "./Storage";

export const isAuthenticated = ()=>{
    return getUserdetails() !== null ? true :false
}

export const logout =()=>{
    removeUser();
}