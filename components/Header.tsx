"use client";
import Link from "next/link";
import {useState} from "react";
import Form from "@/components/Form";
import { FaUserAlt } from 'react-icons/fa';
import { useSession } from "next-auth/react";

export default function Header() {

    const [isToggle, setIsToggle] = useState<boolean>(false);
    const { data: session } = useSession();

    return (
        <div className="h-[70px] w-full bg-[#1A1717] p-3 rounded-lg shadow-md px-7">
            <div className="w-full h-full flex justify-end gap-5">
                {session ? (
                    <button
                        className="px-5
                         text-white
                          font-medium
                          text-sm
                          text-gray-300
                          outline-none
                          bg-[#211F1F]
                          rounded-lg
                          duration-150
                          hover:bg-[#292727]
                          active:shadow-lg
                          active:bg-[#211F1F]"
                    >
                        <FaUserAlt className="text-gray-400"/>
                    </button>
                    ) : (
                    <button
                    className="px-5 text-white font-medium text-sm bg-blue-600 rounded-lg duration-150 hover:bg-blue-700 active:shadow-lg"
                    onClick={()=> setIsToggle(true)}
                >
                    Connect
                </button>)}


            </div>
                <Form isToggle={isToggle} setIsToggle={setIsToggle} />
        </div>
    )
}
