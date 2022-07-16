import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import blogSingle from '../assets/blogSingle2.jpeg'
import Image from 'next/image';
import { Grid } from '@mui/material';
import { IshopCard } from '../types/reusable'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddCardIcon from '@mui/icons-material/AddCard';

import {DateRangeOutlined} from "@mui/icons-material"

export default function ShopCard() {
  return (
    <Card sx={{ maxWidth: 350 , boxShadow : '1px 3px 5px #e7e7e7' , border : "1px solid #efefef" }} dir="rtl" className='card-item' style={{cursor : 'pointer'}}>
        <Image src={blogSingle} alt='img' width='350px'   height='200' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

            <h4 style={{color:"black"}}> 
              مقایسه ایفون سری ۷ 
            </h4>
        </Typography>
        <hr  style={{
          color: '#333333',
          backgroundColor: '#333333',
          height: .5,
          borderColor : '#333333'
      }}/>
        <Typography variant="body2" color="text.secondary">
            مقداری از متن بلاگ که به صورت پیش نمایش در این پوزیشن نشان داده میشود
        </Typography>
      </CardContent>
      <CardActions >
            <Grid container justifyContent="center" >
                <p> 1400/1/22 <DateRangeOutlined/> </p>
                {/* <a href="/"> author <ShoppingBagIcon/> </a> */}
            </Grid>
      </CardActions>
    </Card>
  );
}
