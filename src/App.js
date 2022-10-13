import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Home from "./pages/Home";
import AddNewRecord from "./pages/AddNewRecord";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/addnewrecord" element={<AddNewRecord />} />
      </Routes>
    </div>
  );
}

export default App;
