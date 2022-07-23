import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from '@mui/material/Link';
import React from 'react'
import Four from "../assets/Four.svg"

function Custom404() {
  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid  item >
        <Image alt='404img' src={Four} />
        <Link href="/">
          <h5>
            بازگشت به خانه
          </h5>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Custom404