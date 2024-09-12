import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralLayout from "./Components/Layouts/GeneralLayout";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Men from "./Components/Pages/Men";
import AddArticle from "./Components/Pages/AddArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="men" element={<Men />} />
          <Route path="addarticle" element={<AddArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
