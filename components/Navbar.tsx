import logo from '../assets/logo.png'
import Image from 'next/image'
import { AuthContext} from '../lib/authContext'
import { useContext } from 'react'
import BehModal from './BehModel'
import Link from 'next/link'
import { Grid } from '@mui/material'
import { SubNav } from '../subNav'



function Navbar() {
    const {user} = useContext(AuthContext)
  return (
    <div className="bothNav">
        <div className="Navbar"  style={{zIndex:10,position:'relative'}}>
            <div className="NavIn">
                <div className='row'>
                    <div className="col-3 center">
                        <a href='/'><Image src={logo}  alt="sss" className='logo' width="250" height="220"/></a>
                    </div>
                    <div className="col-5  form-part">
                        <div className="d-none d-md-block">

                            <div className='NavSearch'>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                                        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                                        <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                                    </svg>
                            
                                </button>
                                <input type='text' placeholder='جست و جو...؟'></input>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-4 center">
                        {
                        user
                            ?
                            <IconsForNav/>
                            :
                            <a  href='/auth/login'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <p>ورود</p> 
                            </a>
                        }
    
                    </div>
                
                </div>

            </div>
        </div>
        <div className="row d-none d-sm-block" style={{zIndex:5,position:'relative'}}>
                    <div className='bottom-nav col-md-6 col-sm-8'>
                        
                        <Link href='/sellers'>
                           فروشندگان
                        </Link>

                        <Link href='/products'>
                            محصولات
                        </Link>
                        <Link href='#'>

                               
                               <BehModal title='دسته بندی' name ="دسته بندی" >
                                   <Grid container  direction='row' textAlign='center' width='380px' >

                                        <Grid item dir='column'  style={{borderLeft: '3px solid #ededed', paddingLeft:'55px' , height : '600px'}} >
                                                <h5>دسته ها</h5>
                                                <br/>
                                                <h6><a href="#">مواد غذایی</a></h6>
                                                <h6><a href="#">شستشو و نظافت</a></h6>
                                                <h6><a href="#">آرایشی و بهداشتی</a></h6>
                                                <h6><a href="#">خانه و آشپزخانه</a></h6>
                                                <h6><a href='#'>ابزار برق و روشنایی</a></h6>
                                                <h6><a href='#'>لوازم تحریر و اداری</a></h6>
                                                <h6><a href='#'>سلامت محور</a></h6>
                                                <h6><a href='#'>محصولات دیگر</a></h6>
                                        </Grid>

                                        <Grid item dir='column'  >
                                            
                                        </Grid>
                                        

                                   </Grid>
                                </BehModal>

                        </Link>
                    </div>
                </div>
    </div>
  )
}


const IconsForNav= ()=>{
    return(
        <div className='col-8 d-xs-none'  style={{display:'flex' , alignItems:'center', justifyContent:'space-evenly'}}>
          
                <div >
                    <a href='/chat' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="/dashbord">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </a>
                </div>
            </div>
    
    )
}





export default Navbar