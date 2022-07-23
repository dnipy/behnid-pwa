import { Grid } from '@mui/material'
import Link from '@mui/material/Link';
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
                      <Link href='/blog' className='footer-a'>
                        
                        مطلب بلاگ برای توسعه
                        
                      </Link>
                  </Grid>
                  <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                          
                          تکست های فرعی جهت پر کردن کادر و متن
                          
                        </Link>
                    </Grid>
                  <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                          
                          چگونه در جنگل های شمال کوسه شکار کنیم؟
                          
                        </Link>
                    </Grid>
                    <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                          
                            ایا در ایران اژدها وجود دارد؟
                        </Link>
                    </Grid>
                    <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                            قیمت گذاری اصولی بر روی اجناس
                        </Link>
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
                      <Link href='/blog' className='footer-a'>
                        راهنمای تماس با ما
                      </Link>
                  </Grid>
                  <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                          شروع همکاری و فروش انلاین
                        </Link>
                    </Grid>
                  <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                          کسب اعتبار
                        </Link>
                    </Grid>
                    <br/>
                    <Grid item>
                        <Link href='/blog' className='footer-a'>
                            سوالات متداول
                        </Link>
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