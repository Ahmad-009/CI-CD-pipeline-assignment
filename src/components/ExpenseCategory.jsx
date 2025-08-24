import styles from './ExpenseCategory.module.css';

function CategoryCard({ title, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default CategoryCard;
