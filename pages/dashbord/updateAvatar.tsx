import React,{useState} from "react";
import axios from 'axios'

const ImgUp =()=> {
  const [selectedFile,setSelectedFile]= useState<FileList | null >(null)
  const [filename , setFileName]  = useState<string>('')
  if (filename.length > 1) {
    console.log(filename); 
  }


    const sendRequest = ()=>{

        const reqHead = {
          "Content-Type" : "multipart/form-data",
          "Accept" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem('userSession')}`
        }


        let formData = new FormData();
        formData.append('image', selectedFile![0])

        axios({
          url : 'https://behnid.com/api/upluadtest/two',
          method : "POST",
          headers : reqHead,
          data : formData  
        }).then(res => res.data)
        .then((dta:any) => {

            console.log(dta)
            setFileName(dta?.imagepath?.file_name)
        })
        .catch(e=>console.log(e))
  }


  return (
    <div className="">
      
      <label htmlFor="avatar" >Choose a profile picture:</label>
    <br/>
        <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"
        onChange={(e)=>{
          setSelectedFile( (e.target as HTMLInputElement).files! )
          console.log(selectedFile)
        }}
        />
        <button onClick={sendRequest} >send</button>
      
    </div>
  );
}
export default ImgUp