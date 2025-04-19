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
    <div className={styles.wrapper}>
      <div>
        <img className={styles.img} src={avatar} alt={username} width={360} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}> @{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.profile_item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.profile_item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.profile_item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
