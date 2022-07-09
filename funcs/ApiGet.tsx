import { useEffect, useState } from "react";
import { IapiGet } from "../types/reusable";




export default function apiGet ( props : IapiGet) {

    const [apiData,setApiData] = useState()

    useEffect(()=>{
        var userSession = localStorage.getItem('userSession')

        const reqHead = {
            "Content-Type" : "application/json",
            "Accept" : "*/*",
            "Authorization" : `Bearer ${userSession}`
        }
        fetch(`http://behnid.com/api/${props.url}`,{
            method :"GET",
            headers : reqHead
        }).then(
            res => res.json()
        ).then(dta => setApiData(dta))
    },[])

    return {apiData}
}