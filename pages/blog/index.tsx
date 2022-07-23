import Image from 'next/image'
import React from 'react'
import blog from '../../assets/Blog.svg'
import apiGet from '../../funcs/ApiGet'
import BlogCards from '../../components/BlogCards'
import { Grid } from '@mui/material'
import type { NextPage } from 'next'

  
const Index : NextPage =()=> {
    const {apiData} = apiGet({url : "blog/all?length=10&start=0"})
    console.log(apiData)
  
    // const {apiData} = apiGet({url : "product/single?product_id=1"})
    // console.log(apiData)
    return (
      <div>
        <div>
            <div className='row justify-content-evenly'>
              <div className="col-lg-6 col-md-12 ">
                <Image  src={blog} alt='blogImg' />
                <br/>
                <h1 className='pt-5'>وبلاگ</h1>
              </div>
            </div>
            <br/>
            <hr/>
            <br/>
        </div>
        <div>

          <Grid container justifyContent="space-evenly" rowGap='20px' >

              <Grid item >
                <BlogCards></BlogCards>
              </Grid>


              <Grid item >
                <BlogCards></BlogCards>
              </Grid>


              <Grid item >
                <BlogCards></BlogCards>
              </Grid>

              <Grid item >
                <BlogCards></BlogCards>
              </Grid>


              <Grid item >
                <BlogCards></BlogCards>
              </Grid>


              <Grid item >
                <BlogCards></BlogCards>
              </Grid>

              <Grid item >
                <BlogCards></BlogCards>
              </Grid>

          </Grid>

      
        </div>
      </div>
    )
}
  
export default Index