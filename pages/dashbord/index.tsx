import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Sellers from '../../components/dashbord/seller'
import Buyer from '../../components/dashbord/buyer'
import { IreqHead } from '../../types/reusable'

function Dashbord() {
    const router = useRouter()
    const [superUser,setSuperUser] = useState(false)


    useEffect(()=>{

        var userSession = localStorage.getItem('userSession')
        if (userSession == null) {
            router.replace('/auth/login')
        }
            
        const userPermision = localStorage.getItem('userPermision')
        if (userPermision === null){
            setSuperUser(false)
        }
        userPermision === null ? setSuperUser(false) : 
          userPermision  ? setSuperUser(true) : setSuperUser(false)

          const reqHead = {
            "Content-Type" : "application/json",
            "Accept" : "*/*",
            "Authorization" : `Bearer ${userSession}`
          }
        
        fetch('http://behnid.com/api/showProfile',{
          method: "GET",
          headers : reqHead,
        }).then(res=>res.json()).then(data=>{
          var userType = data[0].user_type 
          userType === "user"  ? setSuperUser(false) : setSuperUser(true)
        }).catch(e=>console.log(e))
      },[])

      return (
        <div>
          {
            superUser ? <Sellers/> : <Buyer/>
          }
        </div>
      )


}

export default Dashbord