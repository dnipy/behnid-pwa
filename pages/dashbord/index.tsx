import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { IreqHead } from '../../types/reusable'
import { AuthContext } from '../../lib/authContext'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HistoryIcon from '@mui/icons-material/History';
import GradeIcon from '@mui/icons-material/Grade';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Avatar } from '@mui/material';
import { AccountCircle, StorefrontOutlined } from '@mui/icons-material';
import AvatarDashbord from '../../components/avatarDashbord';

import ladanOIL from '../../assets/ladanOIL.png'

interface ResivedProps {
  phone : string,
  userName : string,
  user_type_label : string
}



function Dashbord() {

    const router = useRouter()
    const [superUser,setSuperUser] = useState(false)
    const {user} = useContext(AuthContext)
    const [FullData,setFullData] = useState<ResivedProps[] | unknown >()
  
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
          console.log(data)
          setFullData({userName : data.username , phone : data.phone , user_type_label : data.user_type_label})
          console.log(FullData);
          
          var userType = data[0].user_type 
          userType === "user"  ? setSuperUser(false) : setSuperUser(true)
        }).catch(e=>console.log(e))
      },[])
      // const user_name : string | null = FullData?.at(0)?.userName

      return (
        <div className='dashbord-base'>
          <AvatarDashbord  userName='usernamex ' />
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
  return (
    <div className='row'>

      <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row">
          <div className="col-5  align-center">
            <ManageAccountsIcon sx={{ fontSize: 80,  }}/>
          </div>
          <div className="col-6 align-center">
            <h4>
              تنظیمات پروفایل
            </h4>
          </div>
      </div>

      <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row">
          <div className="col-5  align-center">
            <ManageAccountsIcon sx={{ fontSize: 80,  }}/>
          </div>
          <div className="col-6 align-center">
            <h4>
              تنظیمات پروفایل
            </h4>
          </div>
      </div>

      <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row">
          <div className="col-5  align-center">
            <ManageAccountsIcon sx={{ fontSize: 80,  }}/>
          </div>
          <div className="col-6 align-center">
            <h4>
              تنظیمات پروفایل
            </h4>
          </div>
      </div>
</div>

  )
}



const BecomeSeller = ()=>{
  return(
  <div className=" col-lg-5 col-sm-12 dash-parts justify-content-evenly row">
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