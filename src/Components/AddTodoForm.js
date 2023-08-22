import React,{useState} from "react";

function AddTodoForm(props){

    const[text,setText] = useState('');

    let formHandler = e => {
        e.preventDefault();
        props.add(text);
        setText("");
    }

    let inputHandler = e => setText(e.target.value);

    return(
        <form className="add text-center my-4" onSubmit={formHandler}>
            <label for="add" className="add text-light">Add a new todo:</label>
            <input type="text" className="form-control m-auto" value={text} onChange={inputHandler} name="add" id="add" />
        </form>
    )

}

export default AddTodoForm;