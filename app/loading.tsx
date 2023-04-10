import SearchBar from "@/components/searchBar";
import CryptoLoading from "@/components/CryptoLoading";

export default function Loading() {
    return (
        <div className="w-full bg-[#1A1717] rounded-lg shadow-md py-5 px-7 flex flex-col">
            <SearchBar />
            <div className="w-full flex flex-col gap-3">
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
                <CryptoLoading />
            </div>
        </div>
    )
}