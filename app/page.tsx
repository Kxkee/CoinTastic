import SearchBar from "@/components/searchBar";
import Crypto from "@/components/Crypto";
import axios from "axios";
import CryptoLoading from "@/components/CryptoLoading";
import CoinList from "@/components/CoinList";
export default async function Home() {

    const coinList = async() => {
        try {
            const response = await axios.get('http://localhost:3000/api/cryptos');
            console.log('called')
            return response.data
        }catch(err) {
            console.log(err);
        }
    }
    const list = await coinList();
    console.log(list);
  return (
    <div className="w-full bg-[#1A1717] rounded-lg shadow-md py-5 px-7 flex flex-col">
        <CoinList list={list} />
    </div>
  )
}
