import React, {useState} from 'react';

function AddTodo() {
    const [value, setValue] = useState('')
    return (
        <form style={{marginBottom: '1rem'}}>
            <input/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default AddTodo;