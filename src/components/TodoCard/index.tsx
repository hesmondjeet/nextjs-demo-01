import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

interface TodoCardProps {
  todo: {
    id: number
    title: string
    category: number
    completed: boolean
  },
  className?: string
}

const TodoCard = ({todo, className}: TodoCardProps) => {
  return (
    <Link className={`${styles.container} ${className}`} href={`/todos/${todo.id}`}>
      {todo.title}
    </Link>
  )
}

export default TodoCard