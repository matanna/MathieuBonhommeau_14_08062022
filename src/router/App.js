import Style from "./App.module.scss";
import { Route, Routes } from "react-router";
import { CreateEmployee, ListEmployee, Error } from "../pages";
import { Header, Modal } from "../components";
import React, { useContext, useState } from "react";
import { ModalContext, ModalProvider } from "../utils/context/ModalContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "../utils/store/store";

let persistor = persistStore(store);

function App() {
  // @todo Provisoire, a adapter en fonction du besoin
  const content = "Employee Created!";

  const { displayModal } = useContext(ModalContext);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path={"/"} element={<CreateEmployee />} />
              <Route path={"/list"} element={<ListEmployee />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </main>
        {displayModal && <Modal content={content} />}
      </div>
    </PersistGate>
  );
}

export default App;
