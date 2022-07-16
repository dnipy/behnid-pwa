import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterList, FilterListOffOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';

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
        <h6 className='mb-4'>دسته بندی</h6>
        <Grid container rowGap='25px' columnGap='10px' className="mb-3" justifyContent="center" >
          <Grid item className="filterItem" padding='15px' >
              مواد غذایی
          </Grid>
          <Grid item className="filterItem" padding='15px' >
              شستشو نظافت
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              آرایشی بهداشتی
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              خانه و آشپزخانه
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              برق و روشنایی
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              لوازم تحریر
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              سلامت محور
          </Grid>

          <Grid item className="filterItem" padding='15px' >
              سایر موارد
          </Grid>
        </Grid>
        <hr></hr>
        <h6 className='mt-4 mb-4'>چیدمان</h6>
        <Grid container rowGap='25px' columnGap='10px' className="mb-3" justifyContent="center" >
          <Grid item className="filterItem" padding='15px' >
              جدیدترین
          </Grid>
          <Grid item className="filterItem" padding='15px' >
              ارزان ترین
          </Grid>
          <Grid item className="filterItem" padding='15px' >
              گرانترین
          </Grid>
        </Grid>
        <hr></hr>

        <h6 className='mt-4 mb-4'>شرکت ها</h6>
        <Grid container rowGap='25px' columnGap='10px' className="mb-3" justifyContent="center" >
          <Grid item className="filterItem" padding='15px' >
              هم استانی
          </Grid>
          <Grid item className="filterItem" padding='15px' >
              همه ایران
          </Grid>
        </Grid>
        <hr></hr>


        
      </AccordionDetails>
  </Accordion>
  )
}
