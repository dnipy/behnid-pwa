import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../lib/authContext';


function login() {
  const [phone,setPhone] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const router = useRouter()
  const { user } = useContext(AuthContext)

  useEffect(()=>{
    var userSession = localStorage.getItem('userSession')
        if (user) {
            router.replace('/dashbord')          
        }
  },[])
  const handleSignIn = async(e:React.MouseEvent)=>{
    e.preventDefault()
    let body ;
    if (phone?.length == 10) {
      console.log(`0${phone}`);
      
      body = JSON.stringify({
        "phone" :`0${phone}`,
        "password" : password
      })
    } 


    const reqHeaders = {
      "Content-Type" : "application/json",
      "Accept" : "*/*",
    }
    console.log(body);
    
    if (body) {
      await fetch("http://behnid.com/api/register",{
        method : "POST",
        headers : reqHeaders ,
        body : body
      }).then(res=>{
          res.json().then(
            dta => {
                console.log(dta)
                dta !== undefined ? localStorage.setItem("userSession",dta.token) : localStorage.setItem("userSession",'')
              }
            )
            .then(()=>{
              console.log(localStorage.getItem('userSession'))
              console.log('userSet')
            })
            .catch(e=>console.log(e))

          if(res.status == 500){
            alert('500')
          }
          if(res.status == 200){
            alert('200')
          }
      }).catch(e=>{
        console.log(e);
      })
    }
    else {
      alert('شماره تلفن خود را بدون صفر یا +۹۸ وارد کنید!')
    } 
  }


  return (
    <div className='login'>
      <div className="col-sm-12 col-md-10 col-lg-8 inner-login  ">
        <h1 className='pt-3'>ورود به حساب کاربری</h1>
        <form className='p-3'>
            <div className="col-12" dir='ltr'>
              
              <label htmlFor="validationCustomUsername" className="form-label">شماره تلفن</label>
    
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">+98</span>
                <input value={phone} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPhone(e.target.value)} type="text" placeholder=" 912 000 1111" className="form-control "  aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">
                شماره تلفن
              </div>

            </div>
          </div>

          <div className="mt-4 -b-5" dir='ltr'>
              
              <label htmlFor="validationCustomUsername" className="form-label">کلمه عبور</label>
    
              <div className="input-group has-validation">
                <input value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} type="text" placeholder=" رمز عبور حساب کاربری" className="form-control "  aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">
                شماره تلفن
              </div>

            </div>
          </div>


          <button onClick={handleSignIn} type="button" id='loginbtn' className="btn col-12 btn-warning mt-5 mb-4">ارسال</button>

          
        </form>
        <div className="row mb-3">
          <div>
            <a href="/auth/register">ساخت حساب</a>
          </div>
          <div>
            <a href="/auth/login/forgot-password">فراموشی رمز عبور؟</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login