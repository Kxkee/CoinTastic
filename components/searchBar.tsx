"use client";
import {AiOutlineSearch} from "react-icons/ai";

type searchProps = {
    value: string;
    setValue: (value: string) => void;
}
export default function SearchBar({value, setValue}: searchProps) {
    return (
        <div className="w-full h-[80px] flex justify-end items-center py-5">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="h-full"
            >
                <div className="h-full w-full relative">
                    <AiOutlineSearch className="absolute bottom-2.5 left-2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="h-full text-gray-300 pl-10 rounded-md outline-none bg-[#211F1F] focus:bg-[#292727]"
                    />
                </div>
            </form>
        </div>
    )
}