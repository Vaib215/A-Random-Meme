import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MemesList from "./Components/MemesList";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark")
  return (
    <div className="App bg-white dark:bg-slate-900">
      <Navbar setMode={setMode} mode={mode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemesList memeUrl="https://meme-api.herokuapp.com/gimme/9"/>}/>
          <Route path="/dank" element={<MemesList memeUrl="https://meme-api.herokuapp.com/gimme/dankindian/9"/>}/>
          <Route path="/funny" element={<MemesList memeUrl="https://meme-api.herokuapp.com/gimme/funnymemes/9"/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
