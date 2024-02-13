import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
