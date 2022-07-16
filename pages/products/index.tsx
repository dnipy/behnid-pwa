import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShopCard from '../../components/ShopCard'
import Products from '../../fackdata.json';
import { ProductsType } from '../../types/productsTypes'
import { Audio} from 'react-loader-spinner'
import { useRouter } from 'next/router';
import Image from 'next/image';
import products from  '../../assets/products.svg';
import { ProductAccordion } from '../../components/accordion';


const Shop = () => {
  const [loading,setLoading] = useState(true)
  const [allProduct,setAllProdoct] = useState<ProductsType[]>([])
  const router = useRouter()
  
  useEffect(()=>{

    async function dataFetched () {
      const token = window.localStorage.getItem('userSession')
      const setedToken = `Bearer ${token}`
      console.log(setedToken)
      
      await fetch('http://behnid.com/api/product/list?length=10&start=0',{
        headers : {
          "Authorization" : setedToken,
          "Accept" : '*/*',
          "Content-Type" : "application/json"
        }
      }).then(data=>data.json())
        .then(dta=>setAllProdoct(dta))
      .catch(e=>console.log(e))
    }

    dataFetched()

    setTimeout(()=>{
      // setAllProdoct(Products)
      console.log(allProduct)
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
              <Image  src={products} />
              <br/>
              <h1 className='pt-5'>محصولات </h1>
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
    </div>

        <ProductAccordion/>

        <Grid justifyContent="center" minHeight='60vh' alignItems="center" container >
         <Grid item>
          {loading ? 

          <Audio color='#fe6a00' />
            :

          <Grid justifyContent="center" alignItems="center" container gap='50px'>

              {allProduct?.map((elm : any) : any=>(
                  <Grid item  >
                        <div onClick={()=> router.replace(`/products/${elm.id}`) }>
                          <ShopCard pic={elm.image.full_url}  title={elm.name}  price_one={elm.buy_price} price_two={elm.price_two} desc={dect_static}  author={elm.user.name}  />
                        </div>
                  </Grid>

              ))}


          </Grid >
        }
        </Grid> 
        </Grid>
      </Grid>
    </Grid>
  )
}






export default Shop