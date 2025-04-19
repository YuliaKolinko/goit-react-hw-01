import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map(({ id, amount, type, currency }) => (
          <tr className={styles.row} key={id}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
