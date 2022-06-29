import { Grid } from '@mui/material'
import React from 'react'
import {ChatBubbleOutline,AccountCircleOutlined,CategoryOutlined,SearchOutlined} from '@mui/icons-material'

function BottomNav() {
  return (
    <div className='d-xs-block d-sm-none full-bottom-nav'>
        <div className='bottomNav'>
            <Grid dir="row" container justifyContent="space-evenly">
                <Grid item>
                    <a href='/dashbord'>
                        <AccountCircleOutlined/>
                    </a>
                </Grid>
                <Grid item>
                    <a href='/chat'>
                        <ChatBubbleOutline/>
                    </a>
                </Grid>
                <Grid item>
                    <a href='/categories'>
                        <CategoryOutlined/>
                    </a>
                </Grid>
                <Grid item>
                    <a href='#'>
                        <SearchOutlined/>
                    </a>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default BottomNav