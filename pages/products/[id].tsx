import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import Data from '../../fackdata.json'
// import { ProductsType } from '../../types/productsTypes'
import { Audio} from 'react-loader-spinner'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Ladan from '../../assets/ladanOIL.png'
import apiGet from '../../funcs/ApiGet';
import type { NextPage } from 'next'
 

const ProductId : NextPage  = ()=> {
  const router = useRouter()
  const {id} = router.query
  // const [fetchedData,setFetchedData] = useState<ProductsType>()
  const [loading,setLoading] = useState(true)
  const {apiData} = apiGet({url:`product/single?product_id=${id}`})
  console.log(apiData);
  
  useEffect(()=>{
    setTimeout(()=>{
      // const filtr = Data.filter(dta => dta.id === id)
      // setFetchedData(filtr[0])
      setLoading(false)
    },2500)
  },[])

  
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
                            <Image alt="imgForLadan" height='800px'  src={Ladan}   />
                          </div>
                          <div className="col-lg-6 align-item-center mt-5 " >
                            
                            <div className="mt-5 txt-r ">

                              <h2 className=''>product name</h2>
                              
                                    <h6>  <AddCardIcon/>  200-599 </h6>

                                    <h4> <ShoppingBagIcon/> author </h4>

                              
                            </div>

                            <hr/>
                            <div className="mb-4 send-req-single col-12 mt-4">

                              <h6>حداقل میزان خرید = ۲۰۰۰ عدد</h6>
                              <h6>حداکثر میزان خرید = ۵۰۰۰ عدد</h6>
                              <b>موجود</b>
                              <br></br>
                              <button className='btn btn-warning mt-4 col-10'>ادامه و ثبت سفارش</button>
                            </div>
                          </div>
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

export default ProductId