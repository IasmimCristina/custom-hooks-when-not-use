import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./components/Header";
import { TotallyDifferentCatList, CatList } from "./components/CatList";
import Modal from "./components/Modal";
import Main from "./components/Main";
import AppWrapper from "./AppWrapper";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <AppWrapper>
        <Header />
        <Main>
          <CatList />
          <TotallyDifferentCatList />
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Main>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
