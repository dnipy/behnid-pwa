import { Grid } from '@mui/material'
import React from 'react'
import {ChatBubbleOutline,AccountCircleOutlined,CategoryOutlined,SearchOutlined} from '@mui/icons-material'
import Link from '@mui/material/Link';

function BottomNav() {
  return (
    <div className='d-xs-block d-sm-none full-bottom-nav'>
        <div className='bottomNav'>
            <Grid dir="row" container justifyContent="space-evenly">
                <Grid item>
                    <Link href='/dashbord'>
                        <AccountCircleOutlined/>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='/chat'>
                        <ChatBubbleOutline/>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='/categories'>
                        <CategoryOutlined/>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='#'>
                        <SearchOutlined/>
                    </Link>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default BottomNav