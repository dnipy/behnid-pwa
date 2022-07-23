import { IauthContext, IauthContextProps, ResivedProps } from "../types/reusable";
import { createContext , useEffect, useState} from "react";


const authContextDefaultValues: IauthContext = {
    user: false,
    setUser : ()=>{},
    setUserProvience : ()=>{},
    userProvience : 0,
}
export const AuthContext = createContext<IauthContext>(authContextDefaultValues);




export function AuthProvider({ children }:IauthContextProps) {
    
    const [user, setUser] = useState<boolean>(false);
    const [FullData,setFullData] = useState<ResivedProps>()
    const [userProvience,setUserProvience] = useState<number>(0)

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



        var userProvienceLS = localStorage.getItem('userProvience')
        if (!userProvienceLS){
            localStorage.setItem('userProvience',`${userProvience}`)
        }

    },[user])
    
    


    const value = {
        user,
        setUser,
        userProvience,
        setUserProvience
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
