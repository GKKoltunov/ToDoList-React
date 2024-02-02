import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { LangProvider } from "./providers/LangProvider";
import { TaskProvider } from "./providers/TaskProvider";



function App() {

    return(
      <TaskProvider>
        <LangProvider>
          <Header />
          <Main/>
        </LangProvider>
      </TaskProvider>
    )
  
}

export default App;
