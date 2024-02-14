import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Card from "./pages/Card";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Card />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
