import React from 'react';
import TodoItem from './TodoItem';

const style = {
    ul : {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = (props) => {
    return (
        <ul style={style.ul}>
            {props.todos.map(todo => {
                return <TodoItem todo={todo}/>
            })}
        </ul>
    );
};

export default TodoList