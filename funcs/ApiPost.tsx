import { useEffect, useState } from "react";


interface IapiPOST {
    url : string,
    body : {}
}

export default function apiPost ( props : IapiPOST) {
    const [data,setData] = useState()
    useEffect(()=>{
        var userSession = localStorage.getItem('userSession')

        const reqHead = {
            "Content-Type" : "application/json",
            "Accept" : "*/*",
            "Authorization" : `Bearer ${userSession}`
        }

        const reqBody = JSON.stringify(props.body)

        fetch(`http://behnid.com/api/${props.url}`,{
            method :"GET",
            headers : reqHead,
            body : reqBody
        }).then(
            res => res.json()
        ).then(
            dta => setData(dta)
        )
        .catch(e=>console.log(e))

    },[])

    return {data}
}
