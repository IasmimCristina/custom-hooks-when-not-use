import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CatProvider } from "./context/CatContext";
import Header from "./components/Header";
import CatList from "./components/CatList";
import Main from "./components/Main";
import AppWrapper from "./AppWrapper";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <AppWrapper>
        <CatProvider>
          <Header />
          <Main>
            <button onClick={() => setIsModalOpen(true)}>Add Cat</button>
            <CatList />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </Main>
        </CatProvider>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
