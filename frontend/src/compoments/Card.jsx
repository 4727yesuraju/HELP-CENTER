import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Card({card,setFilteredCards,setCards,lastRef}) {

    const handleDelete = async (id,e)=>{
        e.preventDefault();
        if(!window.confirm("Are you sure to delete this card")) return ;
        try {
            const res = await fetch('/api/cards/'+id,{
                method :"DELETE"
            })
            const data = await res.json();
            if(!data.success) toast.error(data.error);
            setFilteredCards(prev=>prev.filter(item=>item._id!=id));
            setCards(prev=>prev.filter(item=>item._id!=id));

            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <Link to={`/${card._id}`} ref={lastRef} className=" flex-grow-0 flex-shrink-0 cursor-pointer pl-4 relative border w-full sm:w-5/12 lg:w-4/12 border-black rounded-lg bg-black text-[aqua] shadow-lg  ">
        <button className="absolute top-2 right-2" onClick={(e)=>handleDelete(card._id,e)}>
            <MdDelete className="size-4 hover:text-red-500"/>
        </button>
      <h2 className="mt-4 p-1 text-wrap  font-bold text-2xl line-clamp-1">{card.title}</h2>
      <div className="w-full border-b border-black"></div>
      <p className="p-1 mb-2 line-clamp-3">{card.description}</p>
    </Link>
  )
}

export default Card
