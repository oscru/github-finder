import styles from "./styles.module.css";

const SearchInput = ({ handleChange }: any) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." className={styles.input} onChange={(e:any) => handleChange(e.target.value)}/>
    </div>
  );
};

export default SearchInput;
