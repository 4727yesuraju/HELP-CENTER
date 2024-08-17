import React from 'react'
import { TbBrandAbstract } from "react-icons/tb";
import { LiaCopyrightSolid } from "react-icons/lia";

function Footer() {
    const footerData = {
        "Abstract" : ["branches"],
        "Resources" : ["Blog","Help Center","Release Notes","Status"],
        "Community" : ["Twitter","LinkedIn","Facebook","Dribbble","Podcase"],
        "Company" : ["About Us","Careers","Legal"],
        "Contact Us" : ["info@abstract.com"]
    }
  return (
    <div className="bg-black text-slate-500 pb-4">
        <div className=" flex flex-col sm:flex-row text-center sm:text-start justify-evenly p-10  gap-10 sm:gap-5 md:gap-10 lg:justify-center lg:gap-20">
            {
                Object.keys(footerData).map(key=>(
                    <div key={key}>
                        <h2 className="text-xl font-bold hover:text-slate-200 cursor-pointer">{key}</h2>
                        <ul>
                            {footerData[key].map(item=>(
                                <li key={item} className="hover:text-slate-200 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
    
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2  w-full">
            <TbBrandAbstract className="size-6 hover:text-[aqua]  cursor-pointer"/>
            <span className="flex items-center gap-1 hover:text-[aqua]  cursor-pointer">
                <LiaCopyrightSolid className="size-6 "/> Copyright 2022
            </span>
            <span className='hover:text-[aqua]  cursor-pointer'>
                Abstract Studio Design, Inc.
            </span>
            <span className="hover:text-[aqua]  cursor-pointer">
                All rights reserved
            </span>
        </div>
    </div>
  )
}

export default Footer
