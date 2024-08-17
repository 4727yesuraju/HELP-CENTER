import {  useState } from "react"
import Footer from "./compoments/Footer"
import Header from "./compoments/Header"
import Main from "./pages/Main"
import Search from "./compoments/Search"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import CardPage from "./pages/CardPage"

function App() {


  const [cards,setCards] = useState([]);
  const [filteredCards,setFilteredCards] = useState([]); // for search functionality

  return (
    <div className={`flex h-screen flex-col`}>
      <Header />
     
      <Routes>
         <Route path="/" element={ <>
          <Search setFilteredCards={setFilteredCards} cards={cards}/>
          <Main filteredCards={filteredCards} setFilteredCards={setFilteredCards} setCards={setCards} />
          </> } />
         <Route path="/:id" element={<CardPage />} />
      </Routes>
     
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
