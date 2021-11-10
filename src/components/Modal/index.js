import React from 'react';

const Modal = ({ onClose, currentProject }) => {
    const { name, description, category, index} = currentProject;
    return(
        <div className="modalBackdrop">
            <div className="modalContianer">
        <h3 className="modalTitle"> {name} </h3>
        <img alt="current category"
            src= {require(`../../../assets/images/${category}/${index}.jpg`)}
        />
        <p> {description} </p>
        <button type = "button"> Close this Modal </button>
        </div>
        </div>
    )
}
export default Modal;