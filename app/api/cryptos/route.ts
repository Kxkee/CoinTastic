import {NextResponse} from "next/server";
import axios from "axios";

export async function GET(req: Request) {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=400&convert=USD', {
            headers: {
                'X-CMC_PRO_API_KEY': `cmc_api_key`,
            }
        })
        return NextResponse.json(response.data);
    }catch(err) {
        return NextResponse.json({error: "Error"}, {status: 404})
    }
}