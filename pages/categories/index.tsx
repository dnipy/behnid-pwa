import React from 'react'
import apiGet from '../../funcs/ApiGet'

function index() {

  const {apiData} = apiGet({ url : 'category/list' })
  console.log(apiData)

  return ( 
    <div>index</div>
  )
}

export default index