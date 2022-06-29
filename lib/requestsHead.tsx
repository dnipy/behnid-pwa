import { IreqHead } from "../types/reusable"

const session = localStorage.getItem('userSession')



if (session){
    var reqHeaders:IreqHead = {
        "Content-Type" : "application/json",
        "Accept" : "*/*",
        "Authorization": `Bearer ${session}`
    }
}
else {
    reqHeaders= {
        "Content-Type" : "application/json",
        "Accept" : "*/*",
    }
}


export {reqHeaders}