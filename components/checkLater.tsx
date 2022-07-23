import Image from 'next/image'
import Link from '@mui/material/Link';
import React from 'react'
import building from '../../assets/building.svg'


function index() {
  return (
    <div>
      <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image src={building} alt="build-alt" />
              <br/>
              <h1 className='pt-5'>درحال ساخت...!</h1>
            </div>
          </div>
          <br/>

          <Link href="/">بازگشت به خانه</Link>
      </div>
    </div>
  )
}

export default index