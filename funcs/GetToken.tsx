import { useEffect, useState } from 'react'
import apiGet from './ApiGet'


interface IuserData {
    Token: string | null; 
    profileData: [any] | undefined;
}


function GetToken() {
    const [userData,setUserData] = useState<IuserData>()

    useEffect(()=>{
       var Token = window.localStorage.getItem("userSession") 
       var {apiData} = apiGet({url : 'showProfile'})
        setUserData({Token,profileData : apiData})
    },[])


    return {
        token : userData?.Token , 
        profileData : userData?.profileData
    }
}


export default GetToken