import React from 'react'
import type {NextPage} from 'next'
import { useRouter } from 'next/router'


const Index : NextPage = ()=> {
    const [formData,setFormData] = React.useState('')
    const [msgData,setMsgData] = React.useState('')
    const router = useRouter()

    var userSession = localStorage.getItem('userSession')
    var reqHead = {
      "Content-Type" : "application/json",
      "Accept" : "*/*",
      "Authorization" : `Bearer ${userSession}`
  }

  
    const Send =()=>{
        fetch(`http://behnid.com/api/chat/add/conversation`,{
            method : "POST",
            headers : reqHead,
            body : JSON.stringify({
                description : msgData
            })
        }).then(res => res.json()).then(dta=>{
            if (dta.status === "success"){
                router.push(`chat/${msgData}`)
            }
        }).catch(e=>console.log(e))
        setFormData('')
        setMsgData('')
    }
  return (
    <div className="d-flex justify-content-center col-12 align-items-center " style={{height : '70vh'}} >
        <div className='col-10 '>

            <h3>پیام به مخاطب جدید</h3>
            <input className="col-8 form-control" type="text" placeholder='ایدی اکانت مورد نظر' value={formData} onChange={(e)=>setFormData(e.target.value)} />
            <div className="mt-3"></div>
            <input className='col-8 form-control' type="text" placeholder='متن درخواست' value={msgData} onChange={(e)=>setMsgData(e.target.value)} />
            <div className="mt-3"></div>
            <button className='btn btn-warning col-10' onClick={Send} >ارسال</button>
        </div>

    </div>
  )
}

export default Index