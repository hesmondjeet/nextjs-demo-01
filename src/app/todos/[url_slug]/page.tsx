import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

interface TodoPageProps {
  params: Promise<{ url_slug: string }>
}

const TodoPage = async ({ params }: TodoPageProps) => {
  const slug = (await params).url_slug;
  
  return <div className={styles.page}>
    <div>
      <Link className={"raised-btn"} href="/todos">Back to Todos</Link>
    </div>
    <div className={styles.id}>Todo ID: {slug}</div>
  </div>
}

export default TodoPage
