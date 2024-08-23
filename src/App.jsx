// import UserCard from "./components/UserCard";

// function App() {
//   return (
//     <>
//       <article>
//         <UserCard />
//       </article>
//     </>
//   );
// }

// export default App;
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Page from "./pages/Page";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="/form" element={<TodoPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

//TodoPage
//--TodoForm (New Todo + Add)
//--TodoList
//---TodoListItem (Delete)

//store
//--todoSlice
