import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Audio} from 'react-loader-spinner'
import { Grid, Link } from '@mui/material'
import Image from 'next/image'
import Ladan from '../../assets/ladanOIL.png'
import type { NextPage } from 'next'
import { CatFind } from '../../funcs/CategoryFind';



const RequestId : NextPage  = ()=> {
  const router = useRouter()
  const {id} = router.query
  // const [fetchedData,setFetchedData] = useState<ProductsType>()
  const [loading,setLoading] = useState(true)

  const [apiData,setApiData] = useState<any[any]>()


  const reqHead = {
          "Content-Type" : "application/json",
          "Accept" : "*/*",
          "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
  }

  useEffect(()=>{
      fetch(`http://behnid.com/api/product/single?product_id=${id}`,{
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
  console.log('api =======',apiData)

  return (  
    <div>
      <Grid container justifyContent="center" >
        <Grid  item maxWidth="lg"  >
          <Grid justifyContent="center" minHeight='60vh' alignItems="center" container >
            <Grid item   >
              {loading
              ?
              <Audio color='#fe6a00' />
              :
              <Grid container   >
                  <Grid item  className='behnid-container' >
                      <div className="row justify-content-evenly ">
                          <div className="col-lg-5 " >
                            <Image alt="imgForLadan" height='512px' width="512px"  src={ apiData?.data?.image?.full_url ? apiData?.data?.image?.full_url  : Ladan}   />
                          </div>
                          <div className="col-lg-6 align-item-center mt-5 " >
                            
                            <div className="mt-5 txt-r ">

                              <h2 className=''>{apiData?.data?.name}</h2>
                              
                                    <h6>  قیمت خرید  {apiData?.data?.buy_price} </h6>

                                    <h4  onClick={()=> router.replace(`/sellers/${apiData?.data?.user_id}`)}> <ShoppingBagIcon/> {apiData?.data?.user?.full_name} </h4>

                              
                            </div>

                            <hr/>
                            <div className="mb-4 send-req-single col-12 mt-4">

                              <h6>تاریخ ایجاد = {apiData?.data?.created_at}</h6>
                              <h6>{ CatFind(apiData?.data?.category_id) }</h6>
                              <b>قیمت فروش = {apiData?.data?.sell_price}</b>
                              <br></br>
                              <Link href={`/chat/${apiData?.data?.user?.id}`} >
                                <button className='btn btn-warning mt-4 col-10'>ادامه و ثبت سفارش</button>
                              </Link>
                            </div>
                          </div>
                      </div>
                      <div>
                        <h4>توضیحات</h4>
                        <br/>
                      <h6>{apiData?.data?.description}</h6>
                  </div>
                  </Grid>

              </Grid>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  </div>
  )
}

export default RequestId