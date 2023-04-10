"use client";

import {RxTriangleUp, RxTriangleDown} from 'react-icons/rx';

type cryptoProps = {
    rank: number;
    name: string;
    symbol: string;
    price: number;
    percentChange1h: number;
    percentChange24h: number;
    percentChange7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
}

export default function Crypto({
    rank,
    name,
    symbol,
    price,
    percentChange1h,
    percentChange24h,
    percentChange7d,
    marketCap,
    volume24h,
    circulatingSupply,
}: cryptoProps) {
    function commafy( num: number ) {
        let str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    return(
        <div className="w-full bg-[#211F1F] py-7 hover:bg-[#292727] duration-150 rounded-lg shadow-sm cursor-pointer">
            <div className="
            w-full
              p-2
               px-5
                 duration-150
                  rounded-lg
                   shadow-sm
                    cursor-pointer
                    flex
                    gap-5">
                <div className="w-[50px] flex justify-center items-center">
                    <p>{rank}</p>
                </div>
                <div className="w-[200px] flex justify-start items-center gap-3">
                    <p>{name}</p>
                    <span className="bg-[#252735] rounded p-1 px-3">{symbol}</span>
                </div>
                <div className="w-[150px] text-end">
                    <p>${commafy(price)}</p>
                </div>
                <div className="w-[100px] flex justify-center items-center">
                    {percentChange1h < 0 ? (
                        <>
                            <RxTriangleDown size={25} className="text-red-600" />
                            <p className="text-red-600">{percentChange1h} %</p>
                        </>
                    ) : (
                        <>
                            <RxTriangleUp size={25} className="text-green-600" />
                            <p className="text-green-600">{percentChange1h} %</p>
                        </>
                    )}
                </div>
                <div className="w-[100px] flex justify-center flex justify-center items-center">
                    {percentChange24h < 0 ? (
                        <>
                            <RxTriangleDown size={25} className="text-red-600" />
                            <p className="text-red-600">{percentChange24h} %</p>
                        </>
                    ) : (
                        <>
                            <RxTriangleUp size={25} className="text-green-600" />
                            <p className="text-green-600">{percentChange24h} %</p>
                        </>
                    )}
                </div>
                <div className="w-[100px] text-center flex justify-center flex justify-center items-center">
                    {percentChange7d < 0 ? (
                        <>
                            <RxTriangleDown size={25} className="text-red-600" />
                            <p className="text-red-600">{percentChange7d} %</p>
                        </>
                    ) : (
                        <>
                            <RxTriangleUp size={25} className="text-green-600" />
                            <p className="text-green-600">{percentChange7d} %</p>
                        </>
                    )}
                </div>
                <div className="w-[190px] text-end">
                    <p>${commafy(marketCap)}</p>
                </div>
                <div className="w-[190px] text-end">
                    <p>${commafy(volume24h)}</p>
                </div>
                <div className="w-[190px] text-end">
                    <p>{commafy(circulatingSupply)} {symbol}</p>
                </div>
            </div>
        </div>
    )
};