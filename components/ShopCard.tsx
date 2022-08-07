import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Ladan from '../assets/ladanOIL.png'
import Image from 'next/image';
import { Grid } from '@mui/material';
import { IshopCard } from '../types/reusable'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddCardIcon from '@mui/icons-material/AddCard';
import Link from '@mui/material/Link';
import NoImg from '../assets/NoImg.png'


export default function ShopCard({ title,price_one,price_two,author,desc,pic } : IshopCard) {
  return (
    <Card sx={{ maxWidth: 350 , boxShadow : '1px 3px 5px #e7e7e7' , border : "1px solid #efefef" }} dir="rtl" className='card-item' style={{cursor : 'pointer'}}>
        <Image src={typeof pic == "string" ? pic : NoImg} alt='img' width='200'  height='200' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

            <h4> 
              {title}
            </h4>
        </Typography>
        <hr  style={{
          color: '#333333',
          backgroundColor: '#333333',
          height: .5,
          borderColor : '#333333'
      }}/>
        <Typography variant="body2" color="text.secondary">
            {desc}
        </Typography>
      </CardContent>
      <CardActions >
            <Grid container justifyContent="space-between" >
                <p> {price_one}-{price_two}  <AddCardIcon/> </p>
                <Link href="/"> {author} <ShoppingBagIcon/> </Link>
            </Grid>
      </CardActions>
    </Card>
  );
}
