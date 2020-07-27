import React from 'react';
import PropTypes from 'prop-types'
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
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} index={index} key={todo.id}/>
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList