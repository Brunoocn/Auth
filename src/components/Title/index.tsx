import styles from './styles.module.scss';

interface TitleProps {
  children: string
}

export function Title({ children }:TitleProps) {
  return <h1 className={styles.title}>{children}</h1>
}