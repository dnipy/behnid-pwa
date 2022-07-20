import { AccountCircle } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Modal from 'react-modal';
import ladanOIL from '../../assets/ladanOIL.png'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

function AvatarDashbord ( props : {userName : string | null} ) {

    const router = useRouter()

    const [dialog,setDialog]= useState(false)
    let subtitle:any;
    function openModal() {
        setDialog(true);
    }
    
    
    function closeModal() {
        setDialog(false);
    }

  return (
    <div>
        <div className='dashbord-base mb-2 '>
          <div className="row mb-5 justify-content-center ">
            <div className="col-6 align-center mb-3">
                <div onClick={openModal}>
                    <Avatar    sx={{ width: 350, height: 350 }} alt="avatar" />
                </div>
            </div>
            <a href="/dashbord">
            <h2> <AccountCircle/> {props.userName} </h2>
            </a>
          </div>
          <hr/>
        </div>
        <Modal
            isOpen={dialog}
            // onAfterOpen={afterOpenModalTwo}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="پروفایل"
        >
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            {/* <button onClick={closeModal}>close</button> */}
            <h2>تصویر پروفایل</h2>

            <div  onClick={()=>router.replace("/dashbord/updateAvatar")} className='btn btn-warning mt-5' >
                <h3 style={{color:'black'}}>حذف تصویر پروفایل</h3>
            </div>
                <br />
            <div onClick={()=>router.replace("/dashbord/updateAvatar")} className='btn btn-warning mt-4' >
                <h3 style={{color:'black'}}>آپدیت تصویر پروفایل</h3>
            </div>

       
         </Modal>
    </div>
  )
}

export default AvatarDashbord
