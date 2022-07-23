import Image from 'next/image'
import React from 'react'
import faq from '../../assets/faq.svg'
import ControlledAccordions from '../../components/accordion'
import type { NextPage } from 'next'


const Index : NextPage = ()=> {
  return (
    <div>
      <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image alt="faQ" src={faq} />
              <br/>
              <h1 className='pt-5'>سوالات متداول</h1>
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
      </div>
      <div>
        <ControlledAccordions/>
      </div>
    </div>
  )
}

export default Index