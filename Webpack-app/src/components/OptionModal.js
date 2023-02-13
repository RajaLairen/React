import React from 'react';
import Modal from 'react-modal';


const OptionModal=(props)=>(
    <Modal
    onRequestClose={props.hanhandleSelectOption}//It will close the modal when we click outside of the modal or enter escape key
        isOpen={!!props.selectOption}
        contentLabel="Slect Option"
    >
        <h3>{props.selectOption}</h3>
        <button onClick={props.hanhandleSelectOption}>Ok</button>
    </Modal>
);

export default OptionModal;