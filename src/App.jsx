import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Cards from './components/card/Cards'
import General from "./pages/General";
import Layout from "./pages/Layout";
import { useState } from "react";
import { ArticleProvider } from './ArticleContext';

function App() {
  const [object, setObject] = useState({})


  return (
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<General />}></Route>
            <Route path="/business" element={<General category="general" />}></Route>
            <Route path="/entertainment" element={<General category="entertainment" />}></Route>
            <Route path="/health" element={<General category="health" />}></Route>
            <Route path="/science" element={<General category="science" />}></Route>
            <Route path="/business" element={<General category="business" />}></Route>
            <Route path="/sports" element={<General category="sports" />}></Route>
            <Route path="/technology" element={<General category="technology" />}></Route>
            <Route path="/general" element={<General category="general" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ArticleProvider>

  )
}



export default App
