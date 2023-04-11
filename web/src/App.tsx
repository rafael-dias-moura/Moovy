import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Library } from "./pages/Library";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
