import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../theme/theme'
import { useEffect, useState } from 'react'

// css-files
import '../styles/bootstrap.css'
import '../styles/index.scss'
import '../styles/global.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Grid, ThemeProvider } from '@mui/material'
import { AuthProvider } from '../lib/authContext'
import BottomNav from '../components/BottomNav'
import NextNProgress from 'nextjs-progressbar'
import { Audio } from 'react-loader-spinner'
// import provienceSelecet from '../components/provienceSelecet'




function MyApp({ Component, pageProps }: AppProps) {
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2500)
    },[])



  return (

    <div  className='whole-app'>
        <NextNProgress height={5} color="#fe6a00" />
        <Head>
            <title>Behnid</title>
        </Head>

        <AuthProvider>
            <Navbar/>

            <ThemeProvider   theme={theme}>
                <div className='main-page mb-5 '>

                    {
                        loading
                            ?
                            <Grid container justifyContent="center"  alignItems="center" minHeight="40vh">
                                <Grid item>
                                    <Audio color='#fe6a00' />
                                </Grid>
                            </Grid>
                            :
                        <Component {...pageProps} />
                    }

                </div>
            </ThemeProvider>
            <Footer/>
            <BottomNav/>
        </AuthProvider>
    </div>

    )
  
}

export default MyApp
