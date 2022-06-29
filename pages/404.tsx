import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Four from "../assets/Four.svg"

function Custom404() {
  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid  item >
        <Image  src={Four} />
        <a href="/">
          <h5>
            بازگشت به خانه
          </h5>
        </a>
      </Grid>
    </Grid>
  )
}

export default Custom404