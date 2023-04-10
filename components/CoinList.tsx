"use client";
import axios from "axios";
import Crypto from "@/components/Crypto";
import {useState} from "react";
import SearchBar from "@/components/searchBar";

type coinListProps = {
    list: any;
}
export default function CoinList({list}: coinListProps) {
    const [searchValue, setSearchValue] = useState<string>("");

    const filteredValue = searchValue ? list.data.filter((crypto: any) => crypto.name.toLowerCase().includes(searchValue.toLowerCase())) : list.data;
    return (
        <>
            <SearchBar value={searchValue} setValue={setSearchValue} />
            <div className="w-full flex flex-col gap-3">
                <div className="
            w-full
             bg-[#211F1F]
              p-2
               px-5
                hover:bg-[#292727]
                 duration-150
                  rounded-lg
                   shadow-sm
                    cursor-pointer
                    flex
                    gap-5">
                    <div className="w-[50px] text-center">
                        <p>Rank</p>
                    </div>
                    <div className="w-[200px] text-start">
                        <p>Name</p>
                    </div>
                    <div className="w-[150px] text-end">
                        <p>Price</p>
                    </div>
                    <div className="w-[100px] text-center">
                        <p>1h %</p>
                    </div>
                    <div className="w-[100px] text-center">
                        <p>24h %</p>
                    </div>
                    <div className="w-[100px] text-center">
                        <p>7d %</p>
                    </div>
                    <div className="w-[190px] text-end">
                        <p>Market Cap</p>
                    </div>
                    <div className="w-[190px] text-end">
                        <p>Volume (24h)</p>
                    </div>
                    <div className="w-[190px] text-end">
                        <p>Circulating Supply</p>
                    </div>
                </div>
                {filteredValue ? (
                    filteredValue.map((crypto: any) => (
                        <Crypto
                            key={crypto.id}
                            rank={crypto.cmc_rank}
                            name={crypto.name}
                            symbol={crypto.symbol}
                            price={parseFloat(crypto.quote.USD.price.toFixed(2))}
                            percentChange1h={parseFloat(crypto.quote.USD.percent_change_1h.toFixed(2))}
                            percentChange24h={parseFloat(crypto.quote.USD.percent_change_24h.toFixed(2))}
                            percentChange7d={parseFloat(crypto.quote.USD.percent_change_7d.toFixed(2))}
                            marketCap={parseFloat(crypto.quote.USD.market_cap.toFixed(2).toLocaleString())}
                            volume24h={parseFloat(crypto.quote.USD.volume_24h.toFixed(2))}
                            circulatingSupply={parseFloat(crypto.circulating_supply.toFixed(3))} />
                    ))

                ) : null
                }
            </div>
        </>
    )
}