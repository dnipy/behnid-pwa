import { useEffect, useState } from "react";


interface IapiPOST {
    url : string,
    body : BodyInit | null | undefined  
}

export default function apiPost ( props : IapiPOST) {
    // const [postData,setPostData] = useState()

    const reqHead = {
        "Content-Type" : "application/json",
        "Accept" : "*/*",
        "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
    }

    const reqBody = JSON.stringify(props.body)

    fetch(`http://behnid.com/api/${props.url}`,{
        method :"POST",
        headers : reqHead,
        body : reqBody
    }).then(
        res => res.json()
    ).then(
        dta => console.log(dta)
    )
    .catch(e=>console.log(e))

    // return {postData}
}
