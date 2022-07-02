import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../lib/authContext'

import { Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function Dashbord() {
    const router = useRouter()
    const [superUser,setSuperUser] = useState(false)
    const {user} = useContext(AuthContext)


    useEffect(()=>{

        var userSession = localStorage.getItem('userSession')
        // if (userSession == null) {
        //     router.replace('/auth/login')
        // }
        if (!user) {
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
        <div className='dashbord-base'>
          <div className="row mb-5 justify-content-center ">
            <div className="col-6 align-center mb-3">
              <Avatar     sx={{ width: 350, height: 350 }} alt="avatar" />
            </div>
            <a href="/dashbord">
            <h2> <AccountCircle/> فروشگاه بهنید </h2>
            </a>
          </div>
          <hr/>
          <div className="row mt-5  justify-content-evenly">

            profile
          </div>
        </div>
      )


}



export default Dashbord