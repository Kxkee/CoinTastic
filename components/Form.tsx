import {useState} from "react";
import Login from "@/components/Login";
import Register from "@/components/Signup";

type formProps = {
    isToggle: boolean;
    setIsToggle: (isToggle: boolean) => void;
}
export default function Form({isToggle, setIsToggle}: formProps) {

    const tabItems = ["Login", "Sign Up"]
    const [selectedItem, setSelectedItem] = useState<number>(0)

    return (
        isToggle ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setIsToggle(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-[#1C1A1A] rounded-md shadow-lg">
                        <div className="flex items-center justify-between p-4">
                            <div className="px-4 md:px-8 w-full flex justify-center">
                                <ul role="tablist" className="max-w-screen-xl mx-auto flex items-center gap-x-3 overflow-x-auto text-sm">
                                    {
                                        tabItems.map((item, idx) => (
                                            <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500"}`}>
                                                <button
                                                    role="tab"
                                                    aria-selected={selectedItem == idx}
                                                    aria-controls={`tabpanel-${idx + 1}`}
                                                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 text-2xl hover:bg-[#211F1F] active:bg-[#211F1F] font-medium"
                                                    onClick={() => setSelectedItem(idx)}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                        <div className="space-y-2 p-10 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                            {selectedItem === 0 ? (
                                <Login />
                            ) : (
                                <Register />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        ) : null
    )
}