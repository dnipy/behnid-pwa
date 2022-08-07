import * as React  from 'react'; 
import type { NextPage } from 'next';
import {useState} from 'react';
import axios from 'axios';




const FullWidthTabs : NextPage= ()=> {
  const [values,setValues] = useState({
   name : '',
   category_id : '',
   sendArea : '' , 
   keywords : '',
   minOrder : '',
   packingType : 'وانت' ,
   price : '', 
   customerPrice : '' , 
   producerPrice : '',
   stocks : '' ,
   weight : '' ,
   deliveryTime : '',
   image : '',
   description : '',
   faq : '' ,
   smartSlug : ''
  })
  const [selectedFile,setSelectedFile]= useState<FileList | null >(null)
  
  const onOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice , deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : e.target.value , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
  }

  const sendRequest = ()=>{


        const reqHead = {
          "Content-Type" : "multipart/form-data",
          "Accept" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
        }


        let formData = new FormData();
        formData.append('image', selectedFile![0])
        formData.append('name', values.name)
        formData.append('description', values.description)
        formData.append('category_id', '1')
        formData.append('customerPrice', values.customerPrice)
        formData.append('producerPrice', values.producerPrice)
        // formData.append('faq', values.faq)
        formData.append('deliveryTime', values.deliveryTime)
        formData.append('weight', values.weight)
        formData.append('sendArea', values.sendArea)
        formData.append('price', values.price)
        formData.append('minOrder', values.minOrder)
        formData.append('packingType', '1')
        formData.append('smartSlug', values.smartSlug)
                

        axios({
          url : 'http://behnid.com/api/product/add',
          method : "POST",
          headers : reqHead,
          data : formData  
        }).then(res => res.data)
        .then((dta:any) => {
            console.log(dta)
        })
        .catch(e=>console.log(e))
  }



  return (
    <div className='col-12 row justify-content-center '>
      <div className="col-10 boxedDiv">
        <h3 className='p-5' >افزودن محصول</h3>
        
        <input className='col-10 mt-3 mb-3'  type="text" value={values.name} placeholder='نام محصول' onChange={(e)=>
          setValues({name : e.target.value , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice , deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="text" value={values.category_id} placeholder='دسته بندی' onChange={(e)=>
          setValues({name : values.name , category_id : e.target.value ,sendArea : values.sendArea , customerPrice : values.customerPrice , deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="number" value={values.customerPrice} placeholder='قیمت خریدار' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea :values.sendArea , customerPrice : e.target.value , deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="text" value={values.deliveryTime} placeholder='مدت زمان ارسال' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : e.target.value , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="text" value={values.description} placeholder='توضیحات' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : e.target.value , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="text" value={values.faq} placeholder='بیشتر' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : e.target.value , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        
        <input className='col-10 mt-3 mb-3' type="file" accept='image/jpg,image/png,image/jpeg' placeholder='تصویر' onChange={(e)=>{
          setSelectedFile((e.target as HTMLInputElement).files!)
          console.log(selectedFile)
        }}
        />
        
        <input className='col-10 mt-3 mb-3' type="text" value={values.keywords} placeholder='کلید ها' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : e.target.value , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        <input className='col-10 mt-3 mb-3' type="number" value={values.minOrder} placeholder='حداقل سفارش' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : e.target.value , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />
        {/* <input className='col-10 mt-3 mb-3' type="text" value={values.packingType} placeholder='شیوه بسته بندی' /> */}
        <br/>
        <b>شیوه بسته بندی</b>
        <div className="d-flex justify-content-evenly mb-3 mt-3">
          <div>
            <label>
              <input
                type="radio"
                name="topping"
                value="وانت"
                id="regular"
                checked={values.packingType === "وانت"}
                onChange={onOptionChange}
              />
              وانت
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="topping"
                value="کامیون"
                id="regular"
                checked={values.packingType === "کامیون"}
                onChange={onOptionChange}
              />
              کامیون
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="topping"
                value="کیلوگرم"
                id="regular"
                checked={values.packingType === "کیلوگرم"}
                onChange={onOptionChange}
              />
              کیلو
            </label>
          </div>
        </div>
        <input className='col-10 mt-3 mb-3' type="number" value={values.price} placeholder='قیمت'  onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : e.target.value , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />

        <input className='col-10 mt-3 mb-3' type="number" value={values.producerPrice} placeholder='قیمت تولید کننده' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : e.target.value, smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />

        <input className='col-10 mt-3 mb-3' type="text" value={values.sendArea} placeholder='محدوده ارسال' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : e.target.value , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : values.weight})
        } />

        <input className='col-10 mt-3 mb-3' type="number" value={values.stocks} placeholder='تعداد' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice, smartSlug : values.smartSlug ,stocks : e.target.value, weight : values.weight})
        } />

        <input className='col-10 mt-3 mb-3' type="text" value={values.weight} placeholder='وزن' onChange={(e)=>
          setValues({name : values.name , category_id : values.category_id ,sendArea : values.sendArea , customerPrice : values.customerPrice, deliveryTime : values.deliveryTime , description : values.description , faq : values.faq , image : values.image ,keywords : values.keywords , minOrder : values.minOrder , packingType : values.packingType , price : values.price , producerPrice : values.producerPrice , smartSlug : values.smartSlug ,stocks : values.stocks , weight : e.target.value})
        } />

      <button className='btn btn-warning col-10 mb-3' onClick={sendRequest} >ثبت محصول</button>
      </div>
    </div>
  );
}


export default FullWidthTabs