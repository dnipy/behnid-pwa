import { LocationCityOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import Modal from 'react-modal';
import ProvienceSearch from './provienceSearchAuto';


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

function ProvienceModal (props : {title : string}) {
    const [provienceOpen,setProvienceOpen]= useState(false)
    let subtitle:any;
    function openModalP() {
        setProvienceOpen(true);
    }
    
    
    function closeModalP() {
        setProvienceOpen(false);
    }

  return (
    <div>
        <a href='#' onClick={openModalP}>
           <LocationCityOutlined/> {props.title}
        </a>
        <Modal
            isOpen={provienceOpen}
            // onAfterOpen={afterOpenModalTwo}
            onRequestClose={closeModalP}
            style={customStyles}
            contentLabel="پروفایل"
        >
            <h3>استان مورد نظر را انتخاب کنید</h3>
            <div className="mt-5">
                <ProvienceSearch/>
            </div>
         </Modal>
    </div>
  )
}

export default ProvienceModal