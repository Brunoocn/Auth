/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Background() {
  return (
    <>
      <img src="/img/logo.svg" alt="logo" className={styles.logo} />
      <img src="/img/vector-l.svg" alt="bubble" className={styles.bubble_left} />
      <img src="/img/vector-r.svg" alt="bubble" className={styles.bubble_right} />
    </>
  );
}
