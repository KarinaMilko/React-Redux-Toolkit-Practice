import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./../TodoListItem/TodoListItem.module.sass";

function TodoListItem({ todo: { id, newTodo }, remove, toggle }) {
  return (
    <li className={styles.todoItem}>
      <input type="checkbox" onChange={() => toggle(id)} />
      <p>{newTodo}</p>
      <button className={styles.btnRemove} onClick={() => remove(id)}>
        <FaRegTrashCan />
      </button>
    </li>
  );
}

export default TodoListItem;
