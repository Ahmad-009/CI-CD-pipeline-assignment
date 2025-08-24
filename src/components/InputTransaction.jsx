import styles from './InputTransaction.module.css';

function InputTransaction({ title, active, onClick }) {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
    >
      <h2 className={styles.title}>
        {title}
      </h2>
    </div>
  );
}

export default InputTransaction;
