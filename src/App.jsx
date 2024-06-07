import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <AdminDashboard />
      </header>
    </>
  );
}

export default App;
