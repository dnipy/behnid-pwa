import { Grid, IconButton, InputAdornment, Link, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  Circles } from 'react-loader-spinner'
import Avatar from '@mui/material/Avatar';
import type { NextPage } from 'next'
import Slider from 'react-slick'
import { SendSharp } from '@mui/icons-material'
import { useRouter } from 'next/router'


const Index:NextPage = ()=> { 
  // states
  const [fData,setFdata] = useState(false)
  const [formData , setFormData] = useState('')
  const [apiData,setApiData] = useState<any[any | [any]]>([])
  const [chatData,setChatData] = useState<any[any]>([])

  //other hooks
  const router = useRouter()
  const {id} = router.query

  var userSession = localStorage.getItem('userSession')
  var reqHead = {
    "Content-Type" : "application/json",
    "Accept" : "*/*",
    "Authorization" : `Bearer ${userSession}`
}


  //Chats UseEffect 
  useEffect(()=>{

    fetch(`http://behnid.com/api/chat/get/message?reciver=${id}`,{
        method :"GET",
        headers : reqHead
    }).then(
        res => {
          res.json()
            if (res.status == 200){
              console.log(200)
            }
            else if (res.status == 500){
              console.log('یوزر موجود نیست یا شما با این اکانت پیامی ندارید')
            }
            
          }
    ).then(dta => {
      setChatData(dta)
      console.log('chat = ',dta)
    })

  },[])



  //Contact UseEffect
  useEffect(()=>{



        fetch(`http://behnid.com/api/chat/get/senders`,{
            method :"GET",
            headers : reqHead
        }).then(
            res => res.json()
        ).then(dta => {
          setApiData(dta)
          console.log('contact = ',dta)
          setFdata(true)

        })
  
  },[])

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1
}


  const sendMessage = ( e : React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
    e.preventDefault()

    fetch(`http://behnid.com/api/chat/add/message`,{
        method :"POST",
        headers : reqHead
    }).then(
        res => res.json()
    ).then(dta => {
      console.log('message => ',dta)
      if(dta.status === "success"){
        setFormData('')
      }
    })

  }

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
                            apiData?.data!.map((elm : any)=>(

                              <Link href={`/chat/${elm.id}`} key={elm.id}  >
                                <div  className='col-12 mb-1 mt-1' style={{marginLeft:'auto' , marginRight : 'auto', height : '100px' , borderBottom : '1px solid #ededed'}}>
                                  <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-item-center">
                                    < Avatar alt="someOne" src=''   sx={{height : 80 , width : 80}} />
                                    </div>
                                    <div className="col-7">
                                      <h6 className="pt-3">{elm.id}@</h6>
                                      <p>{elm.first_name}</p>
                                    </div>
                                  </div>
                                </div>
                              </Link>

                            ))
                            

                        }
                        
                        
                      </div>
                    </div> 
                    <div className="col-lg-7 col-sm-11 " style={{minHeight:'70vh',border:"2px solid #ededed",overflow : "auto" , borderRadius : '12px',marginLeft:'auto' , marginRight : 'auto'}}>
                      <div className="top-chat col-12">
                      <div className='col-12 mb-1 mt-1' style={{marginLeft:'auto' , marginRight : 'auto', height : '90px' }}>
                              <div className="row pt-2">
                                <div className="col-4 d-flex justify-content-center align-item-center ">
                                < Avatar alt="someOne" src=''   sx={{height : 80 , width : 80}} />
                                </div>
                                <div className="col-7" style={{textAlign : 'left'}}>
                                  <h4 className="pt-3">{id}@</h4>
                                  <p>last seen recently</p>
                                </div>
                              </div>
                            </div>  
                      </div>
                      <div className="body-chat col-12">
                        <Grid container justifyContent="center"  alignItems="center" minHeight="40vh">
                          {chatData?.data?.length != 'undifined'
                          ?
                        
                          <Grid item>
                              <p>هنوز هیچ پیامی موجود نیست </p>
                          </Grid>

                          :
                          'پیام ها'
                          }
                      </Grid>
                      </div>
                      <div className="upper-bottom-chat col-12">

                      <div className="col-11">
                        <div className="slider-beh">
                            <Slider    autoplaySpeed={1500} {...settings} arrows={true}  rtl={true}  >
                               
                                    <div className="borderd-sug" onClick={()=>setFormData('سلام خسته نباشید')} >
                                      <b>
                                      سلام خسته نباشید
                                      </b>
                                    </div>
                           
                                <div className='borderd-sug' onClick={()=>setFormData('میشه بیشتر توضیح بدید؟')}>
                                  <div>
                                    <b>
                                      میشه بیشتر توضیح بدید؟
                                    </b>
                                  </div>
                                </div>

                                <div className="borderd-sug" onClick={()=>setFormData('لطفا عکس بیشتری از محصول بفرستید ')}>
                                    <b>
                                      عکس های بیشتر بفرستید
                                    </b>
                                </div>

                                <div className="borderd-sug" onClick={()=>setFormData('متشکرم')}>
                                    <b>
                                      متشکرم
                                    </b>
                                </div>


                                <div className="borderd-sug" onClick={()=>setFormData('مدت زمان ارسال چقدر هستش؟')}>
                                    <b>
                                      مدت زمان ارسال
                                    </b>
                                </div>

                                <div className="borderd-sug" onClick={()=>setFormData('هزینه ارسال چقدر در میاد؟')}>
                                    <b>
                                      هزینه ارسال چقدر در میاد
                                    </b>
                                </div>
                            </Slider>
                        </div>
                    </div>

                      </div>
                      <div className="bottom-char col-12 row ">

                        {/* <div className="col-1" >
                          <Grid container justifyContent="center"  alignItems="center" height="6vh">
                            <Grid item>
                              <SendSharp></SendSharp>
                            </Grid>
                          </Grid>
                        </div> */}

                        <div className="col-12">
                                <TextField
                                    className='col-10'
                                    dir='ltr'
                                    label="متن پیام"
                                    value={formData}
                                    onChange={(e)=>setFormData(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment  position='end' >
                                            <IconButton onClick={sendMessage} >
                                                <SendSharp/>
                                            </IconButton>
                                        </InputAdornment>
                                        )
                                    }}
                                />
                        </div>
                      </div>
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