import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import { removeTodo, toggleDone } from "../../store/slices/todoSlice";

function TodoList({ todo, remove, toggle }) {
  const mapTodo = (d) => (
    <TodoListItem key={d.id} todo={d} remove={remove} toggle={toggle} />
  );

  return <ul>{todo.map(mapTodo)}</ul>;
}
// const mapStateToProps = (state) => state.todo;
const mapStateToProps = ({ todo }) => todo;

const mapDispachToProps = (dispach) => ({
  remove: (id) => dispach(removeTodo(id)),
  toggle: (id) => dispach(toggleDone(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
