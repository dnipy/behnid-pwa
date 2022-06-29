import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Data from '../../fackdata.json'
import { ProductsType } from '../../types/productsTypes'
import { Audio} from 'react-loader-spinner'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Ladan from '../../assets/ladanOIL.png'
 




function ProductId() {
  const router = useRouter()
  const {id} = router.query
  const [fetchedData,setFetchedData] = useState<ProductsType>()
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      const filtr = Data.filter(dta => dta.id === id)
      setFetchedData(filtr[0])
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
                      <div className="row">
                          <div className="col-lg-4" >
                            <Image height='700px'  src={Ladan}   />
                          </div>
                          <div className="col-lg-3 align-item-center">
                            <h3>{fetchedData?.product_title}</h3>
                            <h5> {fetchedData?.price_one}-{fetchedData?.price_two}  <AddCardIcon/> </h5>
                            <h6>{fetchedData?.author} <ShoppingBagIcon/></h6>
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