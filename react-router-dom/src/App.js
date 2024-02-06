import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "./components/layout/navigation/NavBar";
import Aside from "./components/layout/navigation/Aside";
import MainRoutes from "./components/layout/navigation/MainRoutes";

function App() {
  return (
    <Fragment>
      <header>
        <h1>React Router DOM</h1>
        <NavBar></NavBar>
      </header>
      <main>
        <aside>
          <Routes>
            <Route path="/blog" element={<Aside></Aside>}>
            <Route path=":id" element={<Aside></Aside>}></Route>
            </Route>
          </Routes>
        </aside>
        <div className="container">
          <MainRoutes></MainRoutes>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
