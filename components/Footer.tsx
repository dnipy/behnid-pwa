import { Grid } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className="full-footer mt-5 ">
        <Grid container justifyContent="space-around" direction='row' >
            <Grid item >
              <Grid container justifyContent="center"   width="500px"   className='footer-item' >
                <div className='top-text-footer mb-2'>
                  <h3>آخرین مطالب بلاگ</h3>
                </div>
                <Grid  container direction="column"  >
                  <Grid item>
                      <a href='/blog' className='footer-a'>
                        مطلب بلاگ برای توسعه
                      </a>
                  </Grid>
                  <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                          تکست های فرعی جهت پر کردن کادر و متن
                        </a>
                    </Grid>
                  <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                          چگونه در جنگل های شمال کوسه شکار کنیم؟
                        </a>
                    </Grid>
                    <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                            ایا در ایران اژدها وجود دارد؟
                        </a>
                    </Grid>
                    <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                            قیمت گذاری اصولی بر روی اجناس
                        </a>
                    </Grid>

                </Grid>
              </Grid>
            </Grid>

            <Grid item  >
              <Grid container justifyContent="center"  width="500px"  className='footer-item' >
              <div className='top-text-footer mb-2'>
                  <h3>درمورد ما</h3>
                </div>

                <Grid  container direction="column"  >
                  <Grid item>
                      <a href='/blog' className='footer-a'>
                        راهنمای تماس با ما
                      </a>
                  </Grid>
                  <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                          شروع همکاری و فروش انلاین
                        </a>
                    </Grid>
                  <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                          کسب اعتبار
                        </a>
                    </Grid>
                    <br/>
                    <Grid item>
                        <a href='/blog' className='footer-a'>
                            سوالات متداول
                        </a>
                    </Grid>

                  </Grid>


                </Grid>
            </Grid>
            <Grid container justifyContent='center' className="mt-4" >
                <Grid item >
                  <p>
                    تمامی حقوق این وب اپلیکیشن متعلق به بهنید میباشید و در صورت رعایت نشدن حق کپی رایت پیگرد قانونی خواهد داشت
                  </p>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer