import { Router, useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../lib/authContext'
import type { NextPage } from 'next'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HistoryIcon from '@mui/icons-material/History';
import GradeIcon from '@mui/icons-material/Grade';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { AccountCircle, StorefrontOutlined } from '@mui/icons-material';
import AvatarDashbord from '../../components/avatarDashbord';

interface ResivedProps {
  phone : string,
  userName : string,
  user_type_label : string
}



const  Dashbord:NextPage  = ()=> {

    const router = useRouter()
    const [superUser,setSuperUser] = useState(false)
    const {user} = useContext(AuthContext)
    const [FullData,setFullData] = useState<any>()
  
    useEffect(()=>{

        var userSession = localStorage.getItem('userSession')
        // if (userSession == null) {
        //     router.replace('/auth/login')
        // }
        if (!user) {
          router.replace('/auth/login')
        }
            
        const userPermision = localStorage.getItem('userPermision')
        // if (userPermision === null){
        //     setSuperUser(false)
        // }
        // userPermision === null ? setSuperUser(false) : 
        //   userPermision  ? setSuperUser(true) : setSuperUser(false)

          const reqHead = {
            "Content-Type" : "application/json",
            "Accept" : "*/*",
            "Authorization" : `Bearer ${userSession}`
          }
        
        fetch('http://behnid.com/api/showProfile',{
          method: "GET",
          headers : reqHead,
        }).then(res=>res.json()).then(data=>{
          setFullData(data)
          console.log(FullData);
          
          var userType = data[0].user_type 
          userType === "user"  ? setSuperUser(false) : setSuperUser(true)
        }).catch(e=>console.log(e))
      },[])
      // const user_name : string | null = FullData?.at(0)?.userName

      return (
        <div className='dashbord-base'>
          <AvatarDashbord  userName={FullData?.at(0)?.username} />
          <div className="row   justify-content-evenly">

            <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" onClick={()=>router.replace('/dashbord/profile')}>
                <div className="col-5  align-center">
                  <ManageAccountsIcon sx={{ fontSize: 80,  }}/>
                </div>
                <div className="col-6 align-center">
                  <h4>
                    تنظیمات پروفایل
                  </h4>
                </div>
            </div>
            <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" onClick={()=>router.replace('/dashbord/charts')}>
                <div className="col-5  align-center">
                  <ShowChartIcon sx={{ fontSize: 80,  }}/>
                </div>
                <div className="col-6 align-center">
                  <h4>
                    نمودار ها
                  </h4>
                </div>
            </div>




            <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" onClick={()=>router.replace('/dashbord/history')}>
                <div className="col-5  align-center">
                  <HistoryIcon sx={{ fontSize: 80,  }}/>
                </div>
                <div className="col-6 align-center">
                  <h4>
                      سوابق
                  </h4>
                </div>
            </div>
            <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" onClick={()=>router.replace('/dashbord/interests')} >  
                <div className="col-5  align-center"> 
                  <GradeIcon sx={{ fontSize: 80,  }}/>
                </div>
                <div className="col-6 align-center">
                  <h4>
                    علاقمندی
                  </h4>
                </div>
            </div>




            <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" onClick={()=>router.replace('/dashbord/addRequests')}>
                <div className="col-5  align-center">
                  <HandshakeIcon sx={{ fontSize: 80,  }}/>
                </div>
                <div className="col-6 align-center">
                  <h4>
                    درخواست ها
                  </h4>
                </div>
            </div>
            {
              superUser ? 
                
                <Seller/>
                        :
                <BecomeSeller/>
            }


          </div>
        </div>
      )


}



const Seller = ()=>{
  const router = useRouter()

  return (
      <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row" 
      onClick={()=>router.replace('/dashbord/addProduct')}
      >
          <div className="col-5  align-center">
            <ManageAccountsIcon sx={{ fontSize: 80,  }}/>
          </div>
          <div className="col-6 align-center">
            <h4>
              افزودن محصول 
            </h4>
          </div>
    </div>
  )
}



const BecomeSeller = ()=>{

  const router = useRouter()

  const reqHead = {
    "Content-Type" : "application/json",
    "Accept" : "*/*",
    "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
  }
  
  const reqBody = JSON.stringify({
    token : `Bearer ${localStorage.getItem('userSession')}`
  })

  return(
  <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row"
    onClick={()=>{
      fetch('http://behnid.com/api/request/forseller',{
        method: "POST",
        headers : reqHead,
        body : reqBody
      }).then(res=>res.json()).then(dta=>{
        console.log(dta)
        if(dta.msg === "successfull"){
          localStorage.setItem('userPermision','seller')
          router.reload()
        }
        else {
          alert('متاسفانه درخواست شما مقدور نیست')
        }
      }).catch(e=>console.log(e))
    }}
  >
    <div className="col-5  align-center">
      <StorefrontOutlined sx={{ fontSize: 80,  }}/>
    </div>
    <div className="col-6 align-center">
      <h4>
        فروشندگی با بهنید
      </h4>
    </div>
</div>
  )
}

export default Dashbord