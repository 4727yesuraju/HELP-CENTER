import React, { useEffect, useRef, useState } from 'react'
import Card from '../compoments/Card';
import { CiSquarePlus } from 'react-icons/ci';
import Form from '../compoments/Form';
import Loader from '../compoments/Loader';

function Main({setCards,filteredCards,setFilteredCards,search}) {

    const [loading,setLoading] = useState(true);
    const [show,setShow] = useState(false);
    const [isScroll,setIsScroll] = useState(false);

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
          }finally{
            setLoading(false);
          }
        }
        getCards();
    },[]);

    const lastRef = useRef();

    useEffect(()=>{
      setTimeout(()=>{
        if(isScroll) lastRef.current?.scrollIntoView({behavior : "smooth"});
      },100)
    },[filteredCards]);

  return (
    <main className="flex-grow items-start relative flex flex-wrap justify-center gap-16 p-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {
        loading && filteredCards.length === 0 && <Loader width="120" height="120"/>
      }
      {
        !loading && filteredCards.length === 0 && <h1 className="text-4xl font-bold text-center">no card is found 😢</h1>
      }
    {
      filteredCards?.map(card=>(
         <Card card={card} key={card._id} setFilteredCards={setFilteredCards} setCards={setCards} lastRef={lastRef}/>
      ))
    }
   { 
    !search &&  <button className="absolute top-2 right-0 pr-10 p-1 pl-2 bg-black rounded-l-full" onClick={()=>setShow(true)}>
       <CiSquarePlus className="size-8 text-[aqua]" />
    </button>
    }
    {
     show && !search &&  <Form setShow={setShow} setFilteredCards={setFilteredCards} setCards={setCards} setIsScroll={setIsScroll}/>
    }
 </main>
  )
}

export default Main
