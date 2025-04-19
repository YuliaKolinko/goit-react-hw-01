import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles["table"]}>
      <thead className={styles["table-header"]}>
        <tr>
          <th className={styles["table-title"]}>Type</th>
          <th className={styles["table-title"]}>Amount</th>
          <th className={styles["table-title"]}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles["table-body"]}>
        {items.map(({ id, amount, type, currency }) => (
          <tr className={styles["table-row"]} key={id}>
            <td className={styles["table-item"]}>{type}</td>
            <td className={styles["table-item"]}>{amount}</td>
            <td className={styles["table-item"]}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
