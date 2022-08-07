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
                                            <IconButton>
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