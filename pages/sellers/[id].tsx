import { AccountCircle } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import FullWidthTabs from '../../components/shopTabs'
import type { NextPage } from 'next'
import Link from '@mui/material/Link';
import Image from 'next/image'
import sellerSingle from '../../assets/sellerSingle.jpg'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'

const SellerId:NextPage = ()=> {
  const router = useRouter()
  const {id} = router.query

  const [loading,setLoading] = useState(true)
  const [apiData,setApiData] = useState<any[any]>()


  const reqHead = {
          "Content-Type" : "application/json",
          "Accept" : "*/*",
          "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
  }

  useEffect(()=>{
      fetch(`http://behnid.com/api/sellers/single?sellerid=${id}`,{
            method :"GET",
            headers : reqHead
      }).then(res =>res.json())
      .then( dta => { 
         setApiData(dta)
         setLoading(false)
        })

  },[])
  
  
  if(typeof apiData != 'undefined'){
    if(apiData.error != 0 ){
      router.replace('/404')
    }
  }
  // console.log('api =======',apiData)
  return (
    <div className='sellerIDpage'>
      {loading ? 'loading' : 
        <div className='mt-3'>
          <div className='dashbord-base mb-2 '>
            <div className="row mb-2 justify-content-center ">
              <div className="col-6 align-center mb-3">
                  <div >
                      <Avatar     sx={{ width: 350, height: 350 }} alt="avatar"   src='' />
                  </div>
              </div>
              <Link >
                <h2>  فروشگاه {apiData?.data?.username} </h2>
                <h6> عضو از تاریخ  {apiData?.data?.created_at.slice(0,10)} </h6>
              </Link>

            </div>
            <div style={{marginLeft:"auto" , marginRight:"auto"}}>

              <div className="d-flex justify-content-center col-12">
                <div className="p-3">
                  <h3>{apiData?.data?.follower}</h3>
                  <h5>دنبال کنندگان</h5>
                </div>
              
                <div className="p-3">
                  <h3>{apiData?.data?.follower}</h3>
                  <h5>دنبال شوندگان</h5>

                </div>

              </div>

            </div>
            <div className="col-12 mt-3 ">
              {/* <Image height='450px'   src={sellerSingle}  /> */}
            </div>
            <div className="mt-5"></div>
            <div className='boxedDiv col-8 mb-5'>
              <br></br>
              <h4>معرفی فروشنده</h4>
              <br></br>
              <p className='p-3'>ایران هاست، ارائه دهنده خدمات میزبانی وب، ثبت دامنه وطراحی وب وهمچنین خدمات دیجیتال مارکتینگ، پس از 23 سال فعالیت در حوزه خدمات وب، از جمله با سابقه ترین و معتبرترین شرکت های هاستینگ ایران شناخته میشود.
                در ایران هاست شما هر روز با چالشهای جدید روبرو میشوید، اینجا بهترین مکان برای آن دسته از آدمهایی است که خلاق، یادگیرنده و شیفته کار تیمی هستند.

                محدوده شرکت : تهران مطهری-مفتح
                روزهای کاری : شنبه تا پنجشنبه
                نوع همکاری : تمام وقت
              </p>
            </div>

            <hr></hr>

            <h2 className="pt-3" >محصولات</h2>
            <div className='pt-5 pb-5' >
              <b>هنوز محصولی توسط این فروشگاه عرضه نشده است</b>
            </div>
          </div>
        </div>
        }
    </div>
  )
}

export default SellerId