import { BrowserRouter,Route, Routes } from "react-router-dom";
import Confirmation from "./page/confirmation";
import Home from "./page/home";
import PageNotFound from "./page/pagenotfound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
