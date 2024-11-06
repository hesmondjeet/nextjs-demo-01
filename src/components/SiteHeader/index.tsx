import React from 'react';
import styles from './styles.module.scss';
import UserButton from '@/components/UserButton';
import Link from 'next/link';

const SiteHeader = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/"><img className={styles.image} src="/next.svg" alt="logo" /></Link>
      <UserButton />
    </div>
  )
}

export default SiteHeader