import React, {useContext} from "react";
import PropTypes from "prop-types";
import s from "./Todo.module.css";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "40px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

const TodoItem = (props) => {
    const {removeTodo} = useContext(Context)
  const classes = [];

  if (props.todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
        checked={props.todo.completed}
          style={styles.input}
          onChange={() => props.onChange(props.todo.id)}
          type="checkbox"
        />
        <strong>{props.index + 1}</strong>&nbsp;
        {props.todo.title}
      </span>
      <button className={s.rm} onClick={removeTodo.bind(null, props.todo.id)}>&times;</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
