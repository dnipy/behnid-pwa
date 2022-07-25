import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../lib/authContext'
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import {cityOptionType , cityType}  from '../../types/reusable'
import ProvienceSearch from '../../components/provienceSearchAuto';
import type { NextPage } from 'next'
import Link from '@mui/material/Link';
import PhotoUpload from '../../components/photo';



const  AddRequests : NextPage  =()=> {
    // const router = useRouter()
    // const {user} = useContext(AuthContext)
    const [values,setValues] = useState({
      name : '',
      description : '',
      categories : 1,
      price_to : '' ,
      count : '0'
    })



      const defaultProps = {
        options: cities,
        getOptionLabel: (option: cityOptionType) => option.title,
      };

      const reqHead = {
        "Content-Type" : "application/json",
        "Accept" : "*/*",
        "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
      }


      const reqBody =JSON.stringify({
          subs : [{"id":values.categories}],
          name: values.name,
          description : values.description,
          sell_price : values.price_to,
      })


      const sendRequest = ()=>{
          fetch('https://behnid.com/api/product/add',{
            method : "POST",
            headers : reqHead,
            body : reqBody
          }).then(res=>res.json())
          .then((dta:any) => {
              console.log(dta)
              if(dta.msg === "unauthorized"){
                  alert('شما فروشنده نیستید!')
              }
              else{
                  alert(200)
              }
          })
          .catch(e=>console.log(e))
      }


      return (
        <div className='dashbord-base mb-4 '>
          {/* <div className="row mb-5 justify-content-center ">
            <div className="col-6 align-center mb-3">
              <Avatar     sx={{ width: 350, height: 350 }} alt="avatar" />
            </div>
            <Link href="/dashbord">
            <h2> <AccountCircle/> فروشگاه بهنید </h2>
            </Link>
          </div> */}
          
          <div className="row mt-5  justify-content-evenly">


            <div className="col-lg-8 col-sm-12 add-req-div">
              <br />
              <h3>افزودن محصول</h3>
              <div className="row justify-content-center">
                <div className="col-11">
                  <br/>
                <TextField id="outlined-basic" label="نام محصول" variant="outlined" fullWidth={true} dir="rtl"
                  value={values.name} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setValues({
                    name : e.target.value,
                    description : values.description,
                    categories : values.categories,
                    price_to : values.price_to,
                    count : values.count
                  })}
                />
                <br/>
                <div className="mt-3"></div>
                <TextField
                id="filled-multiline-flexible"
                label="توضیحات"
                multiline
                maxRows={4}
                variant="outlined"
                fullWidth={true}
                value={values.description} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setValues({
                  name : values.name,
                  description : e.target.value,
                  price_to : values.price_to,
                  categories : values.categories,
                  count : values.count
                })}
              />
                <div className="mt-3"></div>
              {/* <Autocomplete
                {...defaultProps}
                id="clear-on-blur"
                clearOnBlur
                renderInput={(params) => (
                  <TextField {...params} label="استان" variant="outlined" />
                )}
              /> */}
              <div className="col-11" style={{marginLeft:'auto',marginRight:'auto'}} >
                <div className="row justify-content-evenly">

                  <div className="col-12">
                    <ProvienceSearch/>
                    <div className="mt-3"></div>
                    <TextField id="outlined-basic" label="بیشترین قیمت" variant="outlined" fullWidth={true} dir="rtl"
                    
                    value={values.price_to} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setValues({
                      name : values.name,
                      description : values.description,
                      price_to : e.target.value,
                    categories : values.categories,
                      count : values.count
                    })}

                    />
                  </div>
                    <div className="mt-3"></div>
                  <div className="col-5">
                  <Autocomplete
                    {...defaultProps}
                    id="clear-on-blur"
                    clearOnBlur
                    renderInput={(params) => (
                      <TextField {...params} label="دسته بندی" variant="outlined" />
                    )}
                  />
                    {/* <ProvienceSearch/> */}


                  </div>
                  <div className="col-5">
                    <TextField id="outlined-basic" label="تعداد" variant="outlined" type='text' fullWidth={true} dir="rtl"
                    
                    value={values.count} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setValues({
                      name : values.name,
                      description : values.description,
                      price_to : values.price_to,
                      categories : values.categories,
                      count : e.target.value
                    })}

                    />
                  </div>
                </div>
                <div className="mt-3"></div>
                <PhotoUpload/>
              </div>
              
              <div className="col-12 mt-3 mb-4">
                <button  onClick={sendRequest} className="btn btn-warning col-12" > ثبت درخواست </button>
              </div>

              </div>
              </div>
            </div>

          </div>
        </div>
      )


}


const cities : cityType[]  = [ 
  {title:'مواد غذایی',id : 1},
  {title:'شستشو نظافت',id : 2},
  {title:'آرایشی بهداشتی',id : 3},
  {title:'خانه آشپزخانه',id : 4},
  {title:'برق و روشنایی',id : 5},
  {title:'لوازم تحریر',id :6},
  {title:'سلامت محور',id : 7},
  {title:'محصولات دیگر',id : 8},
]


export default AddRequests