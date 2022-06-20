import { Route, Routes } from "react-router";
import { CreateEmployee, ListEmployee, Error } from "../pages";
import { Header, Modal } from "../components";
import React, { useContext } from "react";
import { ModalContext } from "../utils/context/ModalContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "../utils/store/store";
import { useLocation } from "react-router-dom";

// Redux store which is persist in local storage - use redux-persist library
let persistor = persistStore(store);

/**
 * The App function is the main component of the application. It renders the Header, the main content, and the Modal
 * @returns The return statement is returning a JSX element.
 */
function App() {
  const { displayModal } = useContext(ModalContext);
  const location = useLocation().pathname;

  return (
    // PersistGate is a necessary element for use redux-persist
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <Header />
        <main className={location === "/list" ? "list-container" : null}>
          <div className="container">
            <Routes>
              <Route path={"/"} element={<CreateEmployee />} />
              <Route path={"/list"} element={<ListEmployee />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </main>
        {displayModal && <Modal />}
      </div>
    </PersistGate>
  );
}

export default App;
