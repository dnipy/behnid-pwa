import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterList, FilterListOffOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import  { useState  } from 'react'

export default function ControlledAccordions() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>مورد اول</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>مورد دوم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>مورد سوم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>مورد چهارم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>مورد پنجم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>مورد ششم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}




export const ProductAccordion = () =>{
  const [catOn,setCatOn] = useState<Number>(0)
  const [order,setOrder] = useState<Number>(0)
  const [loc,setLoc] = useState<Number>(0)
  

  const router = useRouter()
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<FilterList/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>فیلتر</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <h5 className='mb-3'>دسته بندی</h5>
        <b style={{cursor:"pointer"}} onClick={()=>{
          setCatOn(0)
          router.replace(`/products?cat=0&order=0&loc=0`)
          }} >ریست</b>
        
        <Grid container rowGap='25px' columnGap='10px' className="mb-3 mt-3" justifyContent="center" >

        <Grid item className={catOn==0 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(0)
            router.replace(`/products?cat=${0}&order=${order}&loc=${loc}`)
            }} >
              همه
          </Grid>

          <Grid item className={catOn==1 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(1)
            router.replace(`/products?cat=${1}&order=${order}&loc=${loc}`)
            }} >
              مواد غذایی
          </Grid>
          <Grid item className={catOn==2 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(2)
            router.replace(`/products?cat=${2}&order=${order}&loc=${loc}`)
            }} >        
                  شستشو نظافت
          </Grid>

          <Grid item className={catOn==3 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(3)
            router.replace(`/products?cat=${3}&order=${order}&loc=${loc}`)
            }} >         
                 آرایشی بهداشتی
          </Grid>

          <Grid item className={catOn==4 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(4)
            router.replace(`/products?cat=${4}&order=${order}&loc=${loc}`)
            }} >         
                 خانه و آشپزخانه
          </Grid>

          <Grid item className={catOn==5 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(5)
            router.replace(`/products?cat=${5}&order=${order}&loc=${loc}`)
            }} >
                            برق و روشنایی
          </Grid>

          <Grid item className={catOn==6 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(6)
            router.replace(`/products?cat=${6}&order=${order}&loc=${loc}`)
            }} >
                            لوازم تحریر
          </Grid>

          <Grid item className={catOn==7 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(7)
            router.replace(`/products?cat=${7}&order=${order}&loc=${loc}`)
            }} >
                            سلامت محور
          </Grid>

          <Grid item className={catOn==8 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setCatOn(8)
            router.replace(`/products?cat=${8}&order=${order}&loc=${loc}`)
            }} >
                            سایر موارد
          </Grid>
        </Grid>
        <br></br>






        <h6 className='mt-4 mb-4'>چیدمان</h6>
        <Grid container rowGap='25px' columnGap='10px' className="mb-3" justifyContent="center" >
        <Grid item className={order ==0 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setOrder(0)
            router.replace(`/products?cat=${catOn}&order=0&loc=${loc}`)
            }} >
                            جدید ترین
          </Grid>

          <Grid item className={order ==1 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setOrder(1)
            router.replace(`/products?cat=${catOn}&order=1&loc=${loc}`)
            }} >
                            ارزان ترین
          </Grid>

          <Grid item className={order ==2 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setOrder(2)
            router.replace(`/products?cat=${catOn}&order=2&loc=${loc}`)
            }} >
                            گران ترین
          </Grid>
        </Grid>
        <br></br>







        <h6 className='mt-4 mb-4'>شرکت ها</h6>
        <Grid container rowGap='25px' columnGap='10px' className="mb-3" justifyContent="center" >

          <Grid item className={loc == 0 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
              setLoc(0)
              router.replace(`/products?cat=${catOn}&order=${order}&loc=0`)
              }} >
                              همه ایران
            </Grid>


          <Grid item className={loc==1 ? "filterItemOn" : "filterItem"} padding='15px' onClick={()=>{
            setLoc(1)
            router.replace(`/products?cat=${catOn}&order=${order}&loc=1`)
            }} >
                            هم استانی
          </Grid>
        </Grid>
        <hr></hr>


        
      </AccordionDetails>
  </Accordion>
  )
}
