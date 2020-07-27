import React from "react";
import PropTypes from "prop-types";
import s from './Todo.module.css'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '40px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

const TodoItem = (props) => {
  return (
    <li style={styles.li}>
      <span>
        <input style={styles.input} type="checkbox" />
        <strong>{props.index + 1}</strong>&nbsp
        {props.todo.title}
      </span>
      <button className={s.rm}>&times;</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
