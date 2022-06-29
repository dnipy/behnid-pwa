import React from 'react'

function buyer() {
  return (
    <div className='row'>
        <div className="col-3" style={{height:'80vh' , backgroundColor:'orange'}}>
          <h1>پنل خریدار</h1>
        </div>
        <div className="col-8" style={{height:'80vh', marginRight:'5%'}}>
          <div className="col-11" >


          <div className="row mt-5 ">
            <div className="col-3 bordered-beh m-1">
              3
            </div>
            <div className="col-3 bordered-beh m-1">
              3
            </div>
            <div className="col-5 bordered-beh m-1">
              5
            </div>
          </div>


          <div className="row mt-5 ">
            <div className="col-4 bordered-beh m-1">
              4
            </div>
            <div className="col-3 bordered-beh m-1">
              3
            </div>
            <div className="col-4 bordered-beh m-1">
              4
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-2 bordered-beh m-1">
              2
            </div>
            <div className="col-5 bordered-beh m-1">
              6
            </div>
            <div className="col-3 bordered-beh m-1">
              3
            </div>

          </div>


          </div>

        </div>
    </div>
  )
}

export default buyer