import React, { useState } from 'react';
import { TiArrowRight } from "react-icons/ti";

function Search({cards,setCards,filteredCards,setFilteredCards}) {
    const [search,setSearch] = useState("");
    const handleSearch = (e)=>{
        e.preventDefault();
        setFilteredCards(cards.filter(card=>card.title.toLocaleLowerCase().includes(search)))
    }
    console.log("search : ",search);
  return (
    <div className="bg-[rgb(218,219,240)] flex flex-col items-center gap-4 py-10">
      <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mb-6">How can we help?</h2>
      <form action="" className="bg-white p-2  flex items-center rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
         <input type="text" placeholder="search" className="focus:outline-none w-96" onChange={e=>setSearch(e.target.value.toLocaleLowerCase())}/>
         <button onClick={handleSearch}>
            <TiArrowRight className="size-6"/>
         </button>
      </form>
    </div>
  )
}

export default Search
