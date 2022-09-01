import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const SearchResultItems = ({ items }: any) => {
  return (
    <div className={styles.container}>
      <ul className={styles.listResults}>
        {items &&
          items.edges.map(({ node }: any) => (
            <li className={styles.resultItem} key={node.id}>
              <Link to={`user/${node.login}`}>
                <span className=""> {node.name || "- NO NAME -"}</span>
                <span> @{node.login}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResultItems;
