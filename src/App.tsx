import { Routes, Route } from "react-router-dom";
import "./App.css";
import Utilities from "./pages/utilities/Utilities";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Utilities />} />
      </Routes>
    </>
  );
}

export default App;
