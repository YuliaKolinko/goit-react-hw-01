import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
