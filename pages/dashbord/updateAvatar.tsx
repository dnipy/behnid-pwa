import React from 'react';
import ImageUploading from 'react-images-uploading';



export default function updateAvatar() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList:any, addUpdateIndex : any) => {

    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (

    <div className="App">
      <ImageUploading
        acceptType={['jpg','jpeg','png']}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        
      >
        {({
          imageList,
          onImageUpload,
        //   onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">

            {/* &nbsp; */}
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className="d-flex justify-content-center">


                <div style={ images.length == 0 ?  {borderRadius : 12 ,border : '3px gray dashed', minHeight : '50vh' }  : undefined } className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center " >
                    {
                        images.length > 0 ? null  :
                    
                        <button
                        className='btn btn-warning mb-3'
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                        انتخاب تصویر
                        </button>
                    }
                    {imageList.map((image, index) => (
                    <div key={index} className="image-item mt-1">
                        <img src={image['data_url']} alt="" width="400" />
                        <div className="image-item__btn-wrapper mt-3">
                        <button className='btn m-2' onClick={() => onImageUpdate(index)}>انتخاب عکس دیگر</button>
                        <button className='btn btn-danger m-2' onClick={() => onImageRemove(index)}>حذف</button>
                        </div>
                        <div className='mt-3 mb-1' >
                            <button className='btn btn-warning col-12'>ارسال</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
          </div>
        )}
      </ImageUploading>

    </div>

  );
}

