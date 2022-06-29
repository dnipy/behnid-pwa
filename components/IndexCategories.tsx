import Image from 'next/image'
import React from 'react'
import {
  discount,
  guarantee,
  handshake,
  quality,
  sell,
  transit
} from '../assets/index-cat/index'

function IndexCategories() {
  return (
    <div className='mt-5 index-cat ' >
        <div className="row">
            <div className="col-4">
              <Image src={discount} />
              <p>تخفیف</p>
            </div>
            <div className="col-4">
              <Image src={guarantee} />
              <p>ضمانت</p>
            </div>
            <div className="col-4">
              <Image src={handshake} />
              <p>رضایت</p>
            </div>
            <div className="col-4">
              <Image src={quality} />
              <p>کیفیت</p>
            </div>
            <div className="col-4">
              <Image src={sell} />
              <p>فروش</p>
            </div>
            <div className="col-4">
              <Image src={transit} />
              <p>حمل سریع</p>
            </div>
        </div>
    </div>
  )
}

export default IndexCategories