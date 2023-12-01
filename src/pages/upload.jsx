import { useState } from 'react'
import UploadSvg from '../component/uploadsvg'
import Filesvg from '../component/filesvg'
export default function Upload() {
  const [files, setFiles] = useState([])
const [desc, setdesc] = useState()
  const handleDrop = (e) => {
    e.preventDefault()
    const newFiles = [...e.dataTransfer.files]
    setFiles(newFiles)

    
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleFileSelect = (e) => {
    e.preventDefault()
    const newFiles = [...e.target.files]
    setFiles(newFiles)
  }

  const uploadfile = async ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXcxMjEyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzAwOTI3OTY4LCJleHAiOjE3MDEyODc5Njh9.ECu6v3-g3dMOMVO3drUTilXnlVL8ghYH0iifvTdAf6A");
    
    var formdata = new FormData();
    formdata.append("path", files[0]);  
    formdata.append("name", desc);      
   
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/models", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
     
  }
  return (
    <div className='min-h-[90vh] h-full w-full bg-[#B6B6B6] flex justify-center items-center'>
      <div
        className='file-upload max-w-xl w-full bg-[#EFEFEF] border-2 shadow-md border-[#969696] border-dashed rounded-lg px-3 grid place-items-center text-[#6A6A6A] py-16'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type='file'
          className='hidden'
          id='fileInput'
          name='fileInput'
          accept='.jpg,.jpeg,.png,.gif,.pdf'
          onChange={handleFileSelect}
        />
        {files.length === 0 && (
          <label
            htmlFor='fileInput'
            className='flex flex-col justify-center items-center'
          >
            <UploadSvg />
            <p>Upload your voice model.zip</p>
          </label>
        )}
        {files.length > 0 && (
          <>
            <Filesvg />
            <div>
              <p>{files[0].name}</p>
            </div>
            <form onSubmit={(e)=>{
              e.preventDefault()
              uploadfile()
            }} className='mt-5 flex flex-col justify-center items-center gap-4'>
              <input
                type='text'
                required
                onChange={(e)=>setdesc(e.target.value)}
                placeholder='input your model’s description'
                className='rounded-full px-7 py-2 border border-[#D9D9D9] '
              />
              <button onClick={uploadfile} type='submit' className='btn'>submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
