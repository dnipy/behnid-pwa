import Image from 'next/image'
import React from 'react'
import contactUS from '../../assets/contactUS.svg'


function index() {
  return (
    <div>
      <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image src={contactUS} />
              <br/>
              <h1 className='pt-5'>ارتباط با ما</h1>
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default index