import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MemesList from "./Components/MemesList";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark")
  return (
    <div className="App bg-white dark:bg-slate-900">
      <Navbar setMode={setMode} mode={mode}/>
      <MemesList/>
      <Footer/>
    </div>
  );
}

export default App;
