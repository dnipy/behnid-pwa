import Image from 'next/image'
import React from 'react'
import Pay from '../../assets/Pay.svg'
import { SellerCard } from '../../components/sellersCard'
import { useEffect,useState } from 'react'
import { ProductsType } from '../../types/productsTypes'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'



const Sellers:NextPage =()=> {
  const [loading,setLoading] = useState(true)
  const [allProduct,setAllProdoct] = useState<ProductsType[]>([])
  const router = useRouter()
  

  useEffect(()=>{

    async function dataFetched () {
      const token = window.localStorage.getItem('userSession')
      const setedToken = `Bearer ${token}`
      console.log(setedToken)
      
      await fetch('http://behnid.com/api/sellers/all?length=10&start=0',{
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
  return (
    <div>
          <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image alt="payIMGs" src={Pay} />
              <br/>
              <h1 className='pt-5'>لیست فروشندگان بهنید</h1>
            </div>
          </div>
          <br/>
          <hr/>
          <div className="row justify-content-evenly">
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>
              <SellerCard/>

          </div>
    </div>
  )
}

export default Sellers