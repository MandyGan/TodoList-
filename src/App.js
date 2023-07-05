// import "./App.css";
import { TodoList } from "./components/TodoList";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
