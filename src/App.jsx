import { Routes, Route } from "react-router";
import Home from "./pages/Home";
//import "./css/App.css" 

function App(){
 return (
    <div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );

}



export default App