import React, { useEffect, useState } from 'react'
import Card from '../compoments/Card';
import { CiSquarePlus } from 'react-icons/ci';
import Form from '../compoments/Form';

function Main({setCards,filteredCards,setFilteredCards}) {

    const [show,setShow] = useState(false);

    useEffect(()=>{
        const getCards = async()=>{
          try {
            const res = await fetch('/api/cards');
            const data = await res.json();
            if(!data.success) return toast.error(data.error);
            setCards(data.cards);
            setFilteredCards(data.cards);
          } catch (error) {
            toast.error(error.message);
          }
        }
        getCards();
    },[]);

  
  return (
    <main className="flex-grow items-start relative flex flex-wrap justify-center gap-16 p-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    {
      filteredCards?.map(card=>(
         <Card card={card} key={card._id} setFilteredCards={setFilteredCards} />
      ))
    }
    <button className="absolute top-2 right-0 pr-10 p-1 pl-2 bg-black rounded-l-full" onClick={()=>setShow(true)}>
       <CiSquarePlus className="size-8 text-[aqua]" />
    </button>
    {
     show &&  <Form setShow={setShow} setFilteredCards={setFilteredCards}/>
    }
 </main>
  )
}

export default Main
