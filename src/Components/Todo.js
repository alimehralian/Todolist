import React from "react";

function Todo(props){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{props.item.text}</span>
            <div>
                {
                    !props.item.status
                    ? <i className="bi-check-circle doneIcon" onClick={() => props.done(props.item.key)}></i>
                    : <i className="bi bi-backspace doneIcon" onClick={() => props.done(props.item.key)}></i>
                }
                <i className="bi bi-trash3-fill deleteIcon" onClick={() => props.delete(props.item.key)}></i>
            </div>
        </li>
    )
}

export default Todo;