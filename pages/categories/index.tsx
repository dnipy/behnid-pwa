import React from 'react'
import apiGet from '../../funcs/ApiGet'
import type { NextPage } from 'next'



const Index:NextPage = ()=> {

  const {apiData} = apiGet({ url : 'category/list' })
  console.log(apiData)

  return ( 
    <div>index</div>
  )
}

export default Index