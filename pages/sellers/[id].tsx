import { AccountCircle } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import FullWidthTabs from '../../components/shopTabs'
import type { NextPage } from 'next'
import Link from '@mui/material/Link';


const SellerId:NextPage = ()=> {
  return (
    <div className='sellerIDpage'>
        <div className='mt-3'>
          <div className='dashbord-base mb-2 '>
            <div className="row mb-2 justify-content-center ">
              <div className="col-6 align-center mb-3">
                  <div >
                      <Avatar     sx={{ width: 350, height: 350 }} alt="avatar" />
                  </div>
              </div>
              <Link href="/dashbord">
                <h2> <AccountCircle/> فروشگاه بهنید </h2>
                <h6>عضو از تاریخ ۱/۱/۱۴۰۰</h6>
              </Link>

            </div>
            <div style={{marginLeft:"auto" , marginRight:"auto"}}>

              <div className="d-flex justify-content-center col-12">
                <div className="p-3">
                  <h1>1943</h1>
                  <h5>دنبال کنندگان</h5>
                </div>
              
                <div className="p-3">
                  <h1>121</h1>
                  <h5>دنبال شوندگان</h5>

                </div>

              </div>

            </div>
            <div className="col-12">
              <FullWidthTabs/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SellerId