import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from '@mui/material/Link';
import React from 'react'
import Five from "../assets/Five.svg"

function Custom500() {
  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid  item >
        <Image alt="500img"  src={Five} />
        <Link  href="/">
          <h5>
            بازگشت به خانه
          </h5>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Custom500