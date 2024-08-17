import { useEffect, useState } from "react"
import Footer from "./compoments/Footer"
import Header from "./compoments/Header"
import Main from "./pages/Main"
import Search from "./compoments/Search"
import toast, { Toaster } from "react-hot-toast"
import Card from "./compoments/Card"
import { CiSquarePlus } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { Route, Routes } from "react-router-dom"
import CardPage from "./pages/CardPage"

function App() {


  const [cards,setCards] = useState([]);
  const [filteredCards,setFilteredCards] = useState([]); // for search functionality

  return (
    <div className={`flex h-screen flex-col`}>
      <Header />
      <Search filteredCards={filteredCards} setFilteredCards={setFilteredCards} cards={cards} setCards={setCards}/>
      <Routes>
         <Route path="/" element={ <Main filteredCards={filteredCards} setFilteredCards={setFilteredCards} cards={cards} setCards={setCards} /> } />
         <Route path="/:id" element={<CardPage />} />
      </Routes>
     
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
