import { IauthContext } from "../types/reusable";
import { createContext , ReactNode, useEffect, useState} from "react";


const authContextDefaultValues: IauthContext = {
    user: false,
    setUser : ()=>{}
}

export const AuthContext = createContext<IauthContext>(authContextDefaultValues);


type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    
    const [user, setUser] = useState<boolean>(false);
    useEffect(()=>{
        var userSession = localStorage.getItem('userSession')
        console.log(userSession)
        if (userSession != null) {
            if(userSession != undefined){
                setUser(true)
                console.log('ok set');
                
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
