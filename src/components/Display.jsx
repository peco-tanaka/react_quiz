import styles from './Display.module.css';

export default function Display({ children }) {
  // 問題文を表示するコンポーネント
  // childrenを使って問題文を受け取る
  return (
    <div className={styles.display}>
      {children}
    </div>
  )
}

