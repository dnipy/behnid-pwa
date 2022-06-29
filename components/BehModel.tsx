import React, {   useState } from 'react';
import Modal from 'react-modal';
import { ReactChildBeh } from '../types/reusable';

const customStyles = {
  content: {
    top: '500px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

function BehModal( {title  , children , name  } : ReactChildBeh ) {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() { 
    setIsOpen(false);
  }

  return (
    <div>
      <a href='#' onClick={openModal}>{name}</a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
        <div  style={{ width:'900px' , height: "700px" }} >
          {/* <b   style={{cursor:"pointer"}} onClick={closeModal} >
            <Close/>
          </b> */}

          <div className='modelContent'>
            <h2  className='pb-4 pt-2' ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BehModal



// const customStyles = {
//   content: {
//     top: '330px',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };