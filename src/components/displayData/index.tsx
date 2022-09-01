import styles from "./styles.module.scss";

const DisplayData = ({ data }: any) => {
  const node = data?.data?.search?.edges[0].node;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.coverImg}>
          <img src="https://via.placeholder.com/600x200" alt="" />
        </div>
        <div className={styles.profilePicture}>
          <img src={node?.avatarUrl} alt="" />
        </div>
        <div className={styles.mainInfoContainer}>
          <div className={styles.mainInfo}>
            <h1>{node?.name}</h1>
            <a href={node?.url} target="_blank">
              @{node?.login}
            </a>
          </div>
          <div className={styles.bio}>{node?.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
