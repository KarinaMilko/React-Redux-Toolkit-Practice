import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import styles from "./TodoPage.module.sass";

function TodoPage() {
  return (
    <article className={styles.formContainer}>
      <TodoForm />
      <TodoList />
    </article>
  );
}

export default TodoPage;
