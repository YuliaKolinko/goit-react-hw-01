import styles from "./Profile.module.css";
export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles["profile-wrapper"]}>
      <div>
        <img
          className={styles["profile-img"]}
          src={avatar}
          alt={username}
          width={360}
        />
        <p className={styles["user-name"]}>{username}</p>
        <p className={styles["user-tag"]}> @{tag}</p>
        <p className={styles["user-location"]}>{location}</p>
      </div>
      <ul className={styles["profile-stats"]}>
        <li className={styles["profile-stats-item"]}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles["profile-stats-item"]}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles["profile-stats-item"]}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
