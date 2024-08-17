import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'

function CardPage() {
    const {id} = useParams();

    const [card,setCard] = useState(null);
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
            }
        }
        getCard();
    },[id]);

    if(!card) return <div className="flex-grow">
                       loading...
                    </div>;
  return (
    <div className="flex-grow py-6 px-8">
      <h1 className="text-6xl font-bold text-center">{card.title}</h1>
      <p>{card.description}</p>
    </div>
  )
}

export default CardPage
