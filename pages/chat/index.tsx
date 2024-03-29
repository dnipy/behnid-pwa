import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  Circles } from 'react-loader-spinner'
import fackData from '../../fackdata.json'
import ladan from '../../assets/ladanOIL.png'
import { IfackData } from '../../types/fakeDataType'
import Avatar from '@mui/material/Avatar';
import type { NextPage } from 'next'


const Index:NextPage = ()=> { 
  const [fData,setFdata] = useState(false)
  const [apiData,setApiData] = useState<any[any]>([])



  useEffect(()=>{
    setTimeout(() => {
      setFdata(true)
    }, 1000);

        var userSession = localStorage.getItem('userSession')
  
        const reqHead = {
            "Content-Type" : "application/json",
            "Accept" : "*/*",
            "Authorization" : `Bearer ${userSession}`
        }
        fetch(`http://behnid.com/api/chat/get/senders`,{
            method :"GET",
            headers : reqHead
        }).then(
            res => res.json()
        ).then(dta => {
          setApiData(dta)
          console.log(dta)
        })
  

  },[])
  return (
    <div>
      <div>
          <div className='row justify-content-evenly'>
            
                {
                  fData 
                  ? 
                  <div className="col-12 row">
                    <div className="col-lg-3 col-sm-10" style={{height:'70vh',border:"2px solid #ededed",overflow : "auto" , borderRadius : '12px',marginLeft:'auto' , marginRight : 'auto'}}>

                      <div className="col-12" >
                        {apiData?.data?.length  == 0
                               ?
                            <div className='d-flex justify-content-center align-items-center' style={{height : '69vh'}}>
                                <div>
                                  <p>هنوز مخاطبی موجود نیست</p>
                                  <button className='btn btn-warning'>ارسال پیام</button>
                                </div>
                            </div> 
                            :
                            <div  className='col-12 mb-1 mt-1' style={{marginLeft:'auto' , marginRight : 'auto', height : '100px' , borderBottom : '1px solid #ededed'}}>
                              <div className="row">
                                <div className="col-4 d-flex justify-content-center align-item-center">
                                < Avatar alt="someOne" src=''   sx={{height : 80 , width : 80}} />
                                </div>
                                <div className="col-7">
                                  <h6 className="pt-3">user id</h6>
                                  <p>last seen</p>
                                </div>
                              </div>
                            </div>
                        }
                        
                        
                      </div>
                    </div> 
                    <div className="col-lg-7 d-none d-lg-block " style={{height:'70vh',border:"2px solid #ededed",overflow : "auto" , borderRadius : '12px',marginLeft:'auto' , marginRight : 'auto'}}>
                      <Grid container justifyContent="center"  alignItems="center" height="70vh" >
                        <Grid item>
                            <b>مخاطب خود را انتخاب کنید</b>
                        </Grid>
                      </Grid>
                    </div>
                  </div> 
                  :
                    <Grid container justifyContent="center"  alignItems="center" minHeight="40vh">
                      <Grid item>
                          <Circles color='#fe6a00' />
                          <p>منتظر بمانید</p>
                      </Grid>
                    </Grid>
                }
            
          </div>
      </div>
    </div>
  )
}

export default Index