import Link from 'next/link';
import styles from './styles.module.scss';

export function Hero() {
  return (
    <section className={styles.container}>
      <h1>
        NextJS Workshop
      </h1>
      <p>
        In this workshop, you will learn how to use Next.js.
      </p>
      <Link className={styles.link} href="/todos">Todos</Link>
    </section>
  );
}
