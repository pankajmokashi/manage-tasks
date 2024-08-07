import { useDispatch } from "react-redux";
import "./App.css";
import Addtask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { loginSuccess } from "./redux/actions/authActions";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  if (token) {
    dispatch(loginSuccess(true));
  }

  return (
    <div className="App">
      <ToastContainer position="top-left" />
      <div className="main-container">
        <NavBar />
        <Addtask />
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1rem" }}
        ></div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
