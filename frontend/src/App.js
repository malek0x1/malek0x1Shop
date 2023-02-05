import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="collection">
          <Route path=":collection" element={<Collection />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
