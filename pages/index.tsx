import type { NextPage } from 'next'
import Image from 'next/image'
import IndexCategories from '../components/IndexCategories'
import SlickSlider, { LastOrderSlider, LastProductSlider } from '../components/SlickSlider'
// import Data from '../fackdata.json'
import Intro from '../assets/intro.svg'
import Target from '../assets/Target.svg'
import { useRouter } from 'next/router'
import apiGet from '../funcs/ApiGet'

            
const Home: NextPage = ({}) => {
  const router = useRouter()
  
  // const {data} = apiGet({url: 'product/list?length=6&start=0'})
  const {apiData} = apiGet({url: 'requests/all?length=6&start=0'})
  console.log(apiData);


  // const {profileData,token} = GetToken()ط  
  // console.log([profileData,token])
  
  
  return (
    <div  >
        <div className='row justify-content-evenly'>
            <div className="col-lg-6 col-md-12 ">
              <Image alt="intero" src={Intro} />
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
              <button type="button" style={{backgroundColor : "#fe6a00 !important"}} className="btn btn-warning col-4"  onClick={()=>router.replace('products?cat=0&order=0&loc=0')} >محصولات</button>
              <button type="button" className="btn btn-outline-dark col-4" onClick={()=>router.replace('/requests')} > درخواست ها</button>
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
              <button type="button" style={{backgroundColor : "#fe6a00 !important"}}  onClick={()=>router.replace('/auth/login')}  className="btn btn-warning col-10">شروع کنیم!</button>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <Image alt="target" src={Target} />
            </div>
        </div>
        <br/>
        {/* <IndexCategories/> */}
        <br/>
        {/* <LastProductSlider/> */}
        <br/>
        {/* <LastOrderSlider/> */}
    </div>
  )
}




export default Home
