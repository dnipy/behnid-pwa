import { IauthContext, IauthContextProps, ResivedProps } from "../types/reusable";
import { createContext , useEffect, useState} from "react";


const authContextDefaultValues: IauthContext = {
    user: false,
    setUser : ()=>{}
}
export const AuthContext = createContext<IauthContext>(authContextDefaultValues);




export function AuthProvider({ children }:IauthContextProps) {
    
    const [user, setUser] = useState<boolean>(false);
    const [FullData,setFullData] = useState<ResivedProps>()
    useEffect(()=>{
        var userSession = localStorage.getItem('userSession')
        console.log(userSession)
        if (userSession != null) {
            if(userSession != undefined){
                setUser(true)
                console.log('ok set');
                
                const reqHead = {
                    "Content-Type" : "application/json",
                    "Accept" : "*/*",
                    "Authorization" : `Bearer ${userSession}`
                }
            
                fetch('http://behnid.com/api/showProfile',{
                    method: "GET",
                    headers : reqHead,
                }).then(res=>res.json()).then(data=>{
                    console.log(data)
                    setFullData({userName : data.username , phone : data.phone , user_type_label : data.user_type_label})
                    console.log(FullData)}
                )
            }
            
            else {
                setUser(false)
            }
        }

    },[user])
    
    


    const value = {
        user,
        setUser
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
