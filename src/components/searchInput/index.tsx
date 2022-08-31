import styles from "./styles.module.css";

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." className={styles.input}/>
    </div>
  );
};

export default SearchInput;
