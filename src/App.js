import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import MainMenu from "./components/MainMenu/MainMenu";
import Help from "./components/Help/Help";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <MainMenu />

      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
