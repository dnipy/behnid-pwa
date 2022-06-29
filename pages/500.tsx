import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Five from "../assets/Five.svg"

function Custom500() {
  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid  item >
        <Image  src={Five} />
        <a href="/">
          <h5>
            بازگشت به خانه
          </h5>
        </a>
      </Grid>
    </Grid>
  )
}

export default Custom500