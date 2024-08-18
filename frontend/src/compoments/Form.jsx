import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md'
import Loader from './Loader';

function Form({setShow,setFilteredCards,setCards,setIsScroll}) {

    const [formData,setFormData] = useState({});
    const [loading,setLoading] = useState(false);


    const handleChange = (e)=>{
         setFormData({...formData,[e.target.id] : e.target.value});
    }

    const handleCreatePost = async (e)=>{
        e.preventDefault();
        if(!formData.title || !formData.description) return toast.error("title and description fields are required");
        setLoading(true);
        setIsScroll(true);
        try {
            const res = await fetch('/api/cards/create',{
                method : "POST",
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({...formData})
            })
            const data = await res.json();
            if(!data.success) return toast.error(data.error);
            setFilteredCards(prev=>[...prev,{...data.card}]);
            setCards(prev=>[...prev,{...data.card}]);
            setFormData({});
            setShow(false);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
            setTimeout(()=>{
                setIsScroll(false);
            },100);
        }
    }

  return (
    <form className="rounded-lg p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-2/3 md:w-1/2 flex flex-col items-center gap-4  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 ">

         <button type="button" className="absolute top-2 right-2" onClick={()=>setShow(false)}>
            <MdCancel className="size-6" />
         </button>
         <h2 className="text-4xl mb-4 font-bold">Create a card</h2>
         <input 
            id='title'
            type="text" 
            placeholder="title goes here" 
            className="bg-transparent border-black border-b-2 text-black text-center w-11/12 font-bold"
            value={formData.title || ""}
            onChange={handleChange}
        />
         <textarea 
           id='description'
           type="text" 
           placeholder="description goes here" 
           className="bg-transparent border-black border-b-2 text-center w-11/12 foucus:outline-none font-bold" 
           value={formData.description || ""}
           onChange={handleChange}
        />
         <button type="submit" className="bg-black text-[aqua] rounded-lg w-11/12 py-2 my-4 font-bold text-center" onClick={handleCreatePost}>
            {
                loading ? <Loader /> : "submit"
            }
         </button>
     </form>
  )
}

export default Form
