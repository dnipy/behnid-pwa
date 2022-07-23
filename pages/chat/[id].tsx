import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  Circles } from 'react-loader-spinner'
import fackData from '../../fackdata.json'
// import ladan from '../../assets/ladanOIL.png'
import { IfackData } from '../../types/fakeDataType'
import Avatar from '@mui/material/Avatar';
import { SendSharp } from '@mui/icons-material'
// import {chatSlider} from '../../components/SlickSlider'
import Slider from 'react-slick'
// import apiGet from '../../funcs/ApiGet'
import type { NextPage } from 'next'



const Index :NextPage = ()=>  { 

  const [fData,setFdata] = useState<IfackData[]>()
  const [formData,setFormData] = useState('')
  useEffect(()=>{
    setTimeout(() => {
      setFdata(fackData)
    }, 1000);
  },[])


  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1
}


  return (
    <div>
      <div>
          <div className='row justify-content-evenly'>
            
                {
                  fData 
                  ? 
                  <div className="col-12 row">
                    <div className="col-lg-3 d-none d-lg-block" style={{height:'70vh',border:"2px solid #ededed",overflow : "auto" , borderRadius : '12px',marginLeft:'auto' , marginRight : 'auto'}}>

                      <div className="col-12" >
                        
                        {
                          fData.map((elm : IfackData)=>(
                            <div key={elm.id} className='col-12 mb-1 mt-1' style={{marginLeft:'auto' , marginRight : 'auto', height : '100px' , borderBottom : '1px solid #ededed'}}>
                              <div className="row">
                                <div className="col-4 d-flex justify-content-center align-item-center">
                                < Avatar alt="someOne" src=''   sx={{height : 80 , width : 80}} />
                                </div>
                                <div className="col-7">
                                  <h6 className="pt-3">{elm.author}</h6>
                                  <p>اخرین بازدید دیروز </p>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                        
                      </div>
                    </div> 
                    <div className="col-lg-7 col-sm-11 " style={{minHeight:'70vh',border:"2px solid #ededed",overflow : "auto" , borderRadius : '12px',marginLeft:'auto' , marginRight : 'auto'}}>
                      <div className="top-chat col-12">
                      <div className='col-12 mb-1 mt-1' style={{marginLeft:'auto' , marginRight : 'auto', height : '90px' }}>
                              <div className="row align-item=center">
                                <div className="col-4 d-flex justify-content-center align-item-center">
                                < Avatar alt="someOne" src=''   sx={{height : 80 , width : 80}} />
                                </div>
                                <div className="col-7">
                                  <h6 className="pt-3">فروشگاه رسمی بهنید</h6>
                                  <p>last seen</p>
                                </div>
                              </div>
                            </div>  
                      </div>
                      <div className="body-chat col-12">
                        <Grid container justifyContent="center"  alignItems="center" minHeight="40vh">
                          <Grid item>
                              <p>هنوز هیچ پیامی موجود نیست </p>
                          </Grid>
                      </Grid>
                      </div>
                      <div className="upper-bottom-chat col-12">

                      <div className="col-11">
                        <div className="slider-beh">
                            <Slider    autoplaySpeed={1500} {...settings} arrows={true}  rtl={true}  >
                               
                                    <div className="borderd-sug">
                                      <b>
                                      سلام خسته نباشید
                                      </b>
                                    </div>
                           
                                <div className='borderd-sug'>
                                  <div>
                                    <b>
                                      میشه بیشتر توضیح بدید؟
                                    </b>
                                  </div>
                                </div>

                                <div className="borderd-sug">
                                    <b>
                                      عکس های بیشتر بفرستید
                                    </b>
                                </div>

                                <div className="borderd-sug">
                                    <b>
                                      متشکرم
                                    </b>
                                </div>


                                <div className="borderd-sug">
                                    <b>
                                      مدت زمان ارسال
                                    </b>
                                </div>

                                <div className="borderd-sug">
                                    <b>
                                      هزینه ارسال چقدر در میاد
                                    </b>
                                </div>
                            </Slider>
                        </div>
                    </div>

                      </div>
                      <div className="bottom-char col-12 row ">

                        <div className="col-1" >
                          <Grid container justifyContent="center"  alignItems="center" height="6vh">
                            <Grid item>
                              <SendSharp></SendSharp>
                            </Grid>
                          </Grid>
                        </div>

                        <div className="col-11">
                          <TextField
                              className='col-10'
                              id="standard-name"
                              label="پیام"
                              value={formData}
                              onChange={(e)=>setFormData(e.target.value)}
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