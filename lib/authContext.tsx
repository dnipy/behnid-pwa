import { IauthContext, IauthContextProps, ResivedProps } from "../types/reusable";
import { createContext , useEffect, useState} from "react";


const authContextDefaultValues: IauthContext = {
    user: false,
    setUser : ()=>{},
    setUserProvience : ()=>{},
    userProvience : 0,
    FullData : []
}
export const AuthContext = createContext<IauthContext>(authContextDefaultValues);


export function AuthProvider({ children }:IauthContextProps) {
    
    const [user, setUser] = useState<boolean>(false);
    const [FullData,setFullData] = useState<any>()
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
                    console.log(data[0])
                    setFullData(data[0])
                    localStorage.setItem('userPermision',data[0].user_type)
                    }
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

        var userPermision = localStorage.getItem('userPermision')
        if(!userPermision){
            localStorage.setItem('userPermision',FullData!.user_type)
        }

        

    },[user])
    
    


    const value = {
        user,
        setUser,
        userProvience,
        setUserProvience,
        FullData
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
