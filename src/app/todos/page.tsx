"use client";

import React from 'react';
import styles from './styles.module.scss';
import TodoCard from '@/components/TodoCard';
import { findTodos } from '@/services/todo.service';

const TodosPage = () => {

  const pageSize = 3;
  const [initialized, setInitialized] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [todos, setTodos] = React.useState<any[]>([]);
  const [filteredTodos, setFilteredTodos] = React.useState<any[]>([]);
  const [showLoadMore, setShowLoadMore] = React.useState(false);

  React.useEffect(() => {
    if(!initialized) {
      initializeTodos();
      return;
    }
    const end = page * pageSize;
    setFilteredTodos(todos.slice(0, end));
    setShowLoadMore(todos.length >= end);
  }, [page, todos]);

  const nextPage = () => {
    setPage(page + 1);
  }

  function initializeTodos() {
    findTodos().then((_todos) => {
      setInitialized(true);
      setTodos(_todos.data);
    });
  }

  return (
    <div className={styles.page}>
      <div>Page: {page}</div>
      {
        !initialized &&
        <div>
          <img src="/loading-icon.svg" />
        </div>
      }
      {
        initialized &&
        <>
          <div className={styles.cards}>
            {
              filteredTodos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} className={styles.card} />
              ))
            }
          </div>
          {
            showLoadMore &&
            <button className={"outline-btn"} onClick={nextPage}>Load more</button>
          }
        </>
      }
    </div>
  )
}

export default TodosPage