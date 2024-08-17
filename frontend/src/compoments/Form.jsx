import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md'

function Form({setShow,setFilteredCards}) {
    const [loading, setLoading] = useState(false);

    const [formData,setFormData] = useState({});

    console.log(formData);

    const handleChange = (e)=>{
         setFormData({...formData,[e.target.id] : e.target.value});
    }
    const handleCreatePost = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if(!formData.title || !formData.description) return toast.error("title and description fields are required");

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
            console.log("data ",data);
            setFilteredCards(prev=>[...prev,{...data.card}]);
            setFormData({});
            setShow(false);
        } catch (error) {
            toast.error(error.message);
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
         <button className="bg-[aqua] text-black rounded-lg w-11/12 py-2 my-4" onClick={handleCreatePost}>submit</button>
     </form>
  )
}

export default Form
