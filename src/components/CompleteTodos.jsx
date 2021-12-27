import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <div className="todo-status">{todo}</div>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};