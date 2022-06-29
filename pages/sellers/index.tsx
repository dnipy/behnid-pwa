import Image from 'next/image'
import React from 'react'
import Pay from '../../assets/Pay.svg'
import { SellerCard } from '../../components/sellersCard'

function Sellers() {
  return (
    <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image src={Pay} />
              <br/>
              <h1 className='pt-5'>لیست فروشندگان بهنید</h1>
            </div>
          </div>
          <br/>
          <hr/>
          <div className="row justify-content-evenly">
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>

          </div>
    </div>
  )
}

export default Sellers