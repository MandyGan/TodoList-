// import "./App.css";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
