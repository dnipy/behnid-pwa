import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShopCard from '../../components/ShopCard'
import Products from '../../fackdata.json';
import { ProductsType } from '../../types/productsTypes'
import { Audio} from 'react-loader-spinner'
import { useRouter } from 'next/router';
import Image from 'next/image';
import requests from  '../../assets/requests.svg';
import { SellerCard } from '../../components/sellersCard';


const Shop = () => {
  const [loading,setLoading] = useState(true)
  const [allProduct,setAllProdoct] = useState<ProductsType[]>([])
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      setAllProdoct(Products)
      setLoading(false)
    },2500)
  },[])
  const dect_static = "کمی توضیحات درمورد محصول مورد نظر و قیمت و فروشنده آن"
  
  return (
    <Grid container justifyContent="center" >
      <Grid  item maxWidth="lg"  >
      <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image  src={requests} />
              <br/>
              <h1 className='pt-5'>لیست درخواست های موجود</h1>
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
    </div>
        <Grid justifyContent="center" minHeight='60vh' alignItems="center" container >
         <Grid item>
          {loading ? 

          <Audio color='#fe6a00' />
            :

          <Grid justifyContent="space-evenly" alignItems="center" container >

              {/* {allProduct?.map((elm) : any=>(
                  <Grid item  >
                        <div onClick={()=> router.replace(`/products/${elm.id}`) }>
                          <ShopCard  title={elm.product_title}  price_one={elm.price_one} price_two={elm.price_two} desc={dect_static}  author={elm.author}  />
                        </div>
                  </Grid>

              ))} */}
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>


          </Grid >
        }
        </Grid> 
        </Grid>
      </Grid>
    </Grid>
  )
}






export default Shop