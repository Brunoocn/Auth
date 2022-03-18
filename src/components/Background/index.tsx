/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Background() {
  return (
    <>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <img src="/vector-l.svg" alt="bubble" className={styles.bubble_left} />
      <img src="/vector-r.svg" alt="bubble" className={styles.bubble_right} />
    </>
  );
}
