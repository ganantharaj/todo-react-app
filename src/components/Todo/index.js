import React from "react";

/**
 * @author
 * @function Todo
 **/

export const Todo = (props) => {

  const { id,title,status } = props.todo;
  const h1=<h1>{title}</h1>;
  const text=(status) ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};
