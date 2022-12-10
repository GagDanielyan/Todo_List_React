import "./Modal.css";

function Modal({ modal, toggleModal, deleteTodo }) {
    return (
        <>
            {/* if modal is true return the modal */}
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <h2>Are you sure you want to delete?</h2>
                        <div className="btns">
                            <button className="btn yes" onClick={deleteTodo}>Yes</button>
                            <button className="btn no" onClick={toggleModal}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;