import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import Loader from '../compoments/Loader';

function CardPage() {
    const {id} = useParams();

    const [card,setCard] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getCard = async ()=>{
            try {
                const res = await fetch(`/api/cards/${id}`);
                const data = await res.json();
                console.log(data);
                if(!data.success) return toast.error(data.error);
                setCard(data.card);
            } catch (error) {
                toast.error(error.message);
            }finally{
              setLoading(false);
            }
        }
        getCard();
    },[id]);

    if(loading) return <Loader width={120} height={120}/>
    if(!loading && !card) return <h1 className=" flex-grow text-4xl font-bold text-center">no card is found 😢</h1> 
  return (
    <div className="flex-grow py-6 px-8">
      <h1 className="text-6xl font-bold text-center">{card.title}</h1>
      <p className="text-slate-500 mt-4 text-center">{card.description}</p>
    </div>
  )
}

export default CardPage
