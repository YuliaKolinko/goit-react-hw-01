import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
export default function FriendList({ friends }) {
  return (
    <div className="container">
      <ul className={styles.list}>
        {friends.map((friend) => (
          <li className={styles.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
