import styles from './Result.module.css';

export default function Result({ maxQuizLen, correctNumLen }) {
  return (
    <div className={styles.result}>
      あなたの正解数は...
      <span className={styles.resultHighlight}>
        {`全${maxQuizLen}門中、${correctNumLen}問`}
      </span>
      でした！
    </div>
  )
}
