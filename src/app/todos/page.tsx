"use client";

import React from 'react';
import styles from './styles.module.scss';
import { todos } from '@/data/todos.data';
import TodoCard from '@/components/TodoCard';

const TodosPage = () => {

  const pageSize = 3;
  const [page, setPage] = React.useState(1);
  const [filteredTodos, setFilteredTodos] = React.useState<any[]>([]);
  const [showLoadMore, setShowLoadMore] = React.useState(false);

  React.useEffect(() => {
    const end = page * pageSize;
    setFilteredTodos(todos.slice(0, end));
    setShowLoadMore(todos.length >= end);
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  }

  return (
    <div className={styles.page}>
      <div>Page: {page}</div>
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
    </div>
  )
}

export default TodosPage