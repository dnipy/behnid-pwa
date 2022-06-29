import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'





function register() {
  const [phone,setPhone] = useState< string >('')
  const router = useRouter()

  // const { setUser } = useContext(AuthContext)
  useEffect(()=>{
    var userSession = localStorage.getItem('userSession')
        if (userSession != null) {
            router.replace('/dashbord')
        }
  },[])



  const handleSignUp = async(e:React.MouseEvent)=>{
    e.preventDefault()
    let validPhone ;
    let body ;
    if (phone?.length == 10) {
      validPhone === phone
      body = JSON.stringify({
        "phone" : phone
      })
    }

    const reqHeaders = {
      "Content-Type" : "application/json",
      "Accept" : "*/*",
    }

    if (body) {
      await fetch("http://behnid.com/api/register",{
        method : "POST",
        headers : reqHeaders ,
        body : body
      }).then(res=>{
          console.log(res.status);
          if(res.status == 500){
            alert('کد تایید قبلا برای شما ارسال شده است')
            router.replace('/auth/login')
          }
          if(res.status == 200){
            router.replace('/auth/login')
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
    <div className='login' style={{textAlign:'right'}}>
      
      <div className="col-sm-12 col-md-10 col-lg-8 inner-login  ">
        <h1 className='pt-3'>ساخت حساب کاربری</h1>
        <form className='p-3'>


            <div className="col-12"    >
              
              <label  className="form-label mt-3">شماره تلفن</label>
    
              <div className="input-group has-validation" dir='ltr'>
                <span className="input-group-text" id="inputGroupPrepend">+98</span>
                <input value={phone} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPhone(e.target.value)} type="text"  placeholder=" 912 000 1111" className="form-control "  aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">
                شماره تلفن
              </div>

            </div>
          </div>


          <button onClick={handleSignUp} id='loginbtn' className="btn col-12 btn-warning mt-5 mb-4">ارسال</button>

          
        </form>
        <div className="row mb-3">
          <div>
            <a href="/auth/register">ورود به حساب کاربری</a>
          </div>
          <div>
            {/* <a href="/auth/login/forgot-password">فراموشی رمز عبور؟</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default register