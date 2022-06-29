import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import IndexCategories from '../components/IndexCategories'
import SlickSlider, { LastOrderSlider, LastProductSlider } from '../components/SlickSlider'
import Data from '../fackdata.json'
import Intro from '../assets/intro.svg'
import Target from '../assets/Target.svg'
import { useRouter } from 'next/router'

            
const Home: NextPage = () => {
  const [userSession,setUserSession]= useState<string | null>(null)
  useEffect(() => {
    const item = localStorage.getItem('userSession')
    setUserSession(item)

    const latestData = Data.slice(-6)
    console.log(latestData);
    
  }, [])

  const router = useRouter()
  
  
  return (
    <div  >
        <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image src={Intro} />
            </div>


            <div className="col-lg-6 col-md-12 mt-5">
              <h1 className='pt-5'>با بهنید بار بزن و برو...!</h1>
              <h6>بهنید بزرگترین وب اپلیکیشن خرید و فروش عمده در کشور</h6>
                <br/>
              <hr/>
              <br/>
              <h4>
                برای دیدن اخرین درخواست ها 
              </h4>
              <h4>
                یا لیست آخرین محصولات عمده کلیک کنید
              </h4>
              <div className="d-flex mt-5 justify-content-evenly ">
              <button type="button" style={{backgroundColor : "#fe6a00 !important"}} className="btn btn-warning col-4"  onClick={()=>router.replace('/products')} >محصولات</button>
              <button type="button" className="btn btn-outline-dark col-4" onClick={()=>router.replace('/orders')} > سفارشات</button>
              </div>

            </div>
        </div>
        <SlickSlider/>
        <br/>
        <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 mt-5">
              <h1 className='pt-5'>ما چه هدفی داریم؟</h1>
                <br/>
              <hr/>
              <br/>
              <h4>
                هدف ما که مشخص هستش
              </h4>
              <h4>
                  میخایم خیلی راحت تر از همیشه خریدار رو به فروشنده برسونیم!
              </h4>
              <div className=" mt-5 ">
              <button type="button" style={{backgroundColor : "#fe6a00 !important"}} className="btn btn-warning col-10">بزن بریم</button>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <Image src={Target} />
            </div>
        </div>
        <br/>
        <IndexCategories/>
        <br/>
        <LastProductSlider/>
        <br/>
        <LastOrderSlider/>
    </div>
  )
}


export default Home
