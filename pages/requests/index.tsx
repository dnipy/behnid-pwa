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
import apiGet from '../../funcs/ApiGet';
import type { NextPage } from 'next'
import { ReqCard } from '../../components/reqCard';



interface IreqType  {
  area_type?: string,
  category_id?: string,
  city_id?: string,
  count: string,
  count_type?: string,
  created_at: string,
  ct_ids?: null,
  description: string,
  id: Number,
  name: string,
  price_from: string,
  price_to: string,
  product_id?: null,
  province_id?: string,
  province_ids?: null,
  updated_at?: string,
  user_id: string,
}

const Shop:NextPage = () => {
  const [loading,setLoading] = useState(true)
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])




  const [apiData,setApiData] = useState<any[]>([])

  useEffect(()=>{
      var userSession = localStorage.getItem('userSession')

      const reqHead = {
          "Content-Type" : "application/json",
          "Accept" : "*/*",
          "Authorization" : `Bearer ${userSession}`
      }
      fetch(`http://behnid.com/api/requests/all?length=10&start=0`,{
          method :"GET",
          headers : reqHead
      }).then(
          res => res.json()
      ).then(dta => {
        setApiData(dta.data)
        console.log(dta.data)
      })
  },[])


  
  const dect_static = "کمی توضیحات درمورد محصول مورد نظر و قیمت و فروشنده آن"
  
  return (
    <div>
    <Grid container justifyContent="center" >
      <Grid  item maxWidth="lg"  >
        <div>
            <div className='row justify-content-evenly'>
              <div className="col-lg-6 col-md-12 ">
                <Image alt="reqIMG"  src={requests} />
                <br/>
                <h1 className='pt-5'>لیست درخواست های موجود</h1>
              </div>
            </div>
            <br/>
            <hr/>
            <br/>
        </div>
      </Grid>
    </Grid>
    <div className='row justify-content-evenly'>
        {apiData.map((elm:any)=>(
          
            <ReqCard count={elm.count}  name={elm.name} description={elm.description} key={elm.id} id={elm.id}  user_id={elm.user_id}  categorieID={elm?.category_id  } />
          
        ))}
      </div>
    </div>
  )
}






export default Shop