import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles["friendlist-wrapper"]}>
      <img
        className={styles["friendlist-img"]}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles["p"]}>{name}</p>
      <p
        className={styles["p"]}
        className={isOnline ? styles.online : styles.offline}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
