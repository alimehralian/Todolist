import React from "react";

function Alert(props){

    return(
        
            <div className={`toast ${props.alertStatus === true ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">AliMehralian</strong>
                    <small>0 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {
                        props.alertType === "add" 
                        ? <span><i className="bi bi-check-square-fill"></i> Add new Item</span>
                        : <span><i className="bi bi-trash3-fill"></i> Item Deleted</span>
                    }
                </div>
            </div>
    )
}

export default Alert;