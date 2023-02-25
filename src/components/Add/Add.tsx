import styles from "./Add.module.css";
import AddButton from "../AddButton/AddButton";

const Add = () => {
  const IdArray = [94668, 95437];

  return (
    <div className={styles.add_wrapper}>
      {IdArray.map((id, index) => (
        <AddButton id={id} key={`${id}-${index}`} />
      ))}
    </div>
  );
}

export default Add;