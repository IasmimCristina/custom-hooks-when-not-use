import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CatProvider } from "./context/CatContext";
import Header from "./components/Header";
import CatList from "./components/CatList";
import Main from "./components/Main";
import AppWrapper from "./AppWrapper";
import "./App.css";
import ModalWrapper from "./components/ModalWrapper";

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <CatProvider>
          <Header />
          <Main>
            <ModalWrapper />
            <CatList />
          </Main>
        </CatProvider>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
