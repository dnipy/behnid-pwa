import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../lib/authContext'
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import {cityOptionType , cityType}  from '../../types/reusable'



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



      const cities : cityType[]  = [
        {title:'اول',id : 1299},
        {title:'دوم',id : 1299},
        {title:'سوم',id : 1299},
        {title:'جهارم',id : 1299},
        {title:'پنجم',id : 1299},
        {title:'ششم',id : 1299},

      ]
      const defaultProps = {
        options: cities,
        getOptionLabel: (option: cityOptionType) => option.title,
      };



      return (
        <div className='dashbord-base mb-4 '>
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


            <div className="col-lg-8 col-sm-12 add-req-div">
              <br />
              <h3>افزودن درخواست</h3>
              <div className="row justify-content-center">
                <div className="col-11">
                  <br/>
                <TextField id="outlined-basic" label="نام درخواست" variant="outlined" fullWidth={true} dir="rtl" />
                <br/>
                <div className="mt-3"></div>
                <TextField
                id="filled-multiline-flexible"
                label="توضیحات"
                multiline
                maxRows={4}
                variant="outlined"
                fullWidth={true}
              />
                <div className="mt-3"></div>
              <Autocomplete
                {...defaultProps}
                id="clear-on-blur"
                clearOnBlur
                renderInput={(params) => (
                  <TextField {...params} label="استان" variant="outlined" />
                )}
              />
                <div className="mt-3"></div>
              <div className="col-11">
                <div className="row justify-content-evenly">
                  <div className="col-5">
                    <TextField id="outlined-basic" label="کمترین قیمت" variant="outlined" fullWidth={true} dir="rtl" />
                  </div>
                  <div className="col-5">
                    <TextField id="outlined-basic" label="بیشترین قیمت" variant="outlined" fullWidth={true} dir="rtl" />
                  </div>
                    <div className="mt-3"></div>
                  <div className="col-5">
                  <Autocomplete
                    {...defaultProps}
                    id="clear-on-blur"
                    clearOnBlur
                    renderInput={(params) => (
                      <TextField {...params} label="دسته بندی" variant="outlined" />
                    )}
                  />

                  </div>
                  <div className="col-5">
                    <TextField id="outlined-basic" label="تعداد" variant="outlined" type='number' fullWidth={true} dir="rtl" />
                  </div>
                </div>
              </div>
              
              <div className="col-12 mt-3 mb-4">
                <button className="btn btn-warning col-12" > ثبت درخواست </button>
              </div>

              </div>
              </div>
            </div>

          </div>
        </div>
      )


}




export default Dashbord