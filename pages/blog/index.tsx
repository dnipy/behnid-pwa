import React from 'react'
import apiGet from '../../funcs/ApiGet'

function Blog() {

  const {apiData} = apiGet({url : "blog/all?length=10&start=0"})
  console.log(apiData)


  return (
    <div>Blog</div>
  )
}

export default Blog