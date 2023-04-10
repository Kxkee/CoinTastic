import {NextResponse} from "next/server";
import axios from "axios";

export async function GET(req: Request) {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=400&convert=USD', {
            headers: {
                'X-CMC_PRO_API_KEY': '6258727e-9671-4a43-ad72-8ab65a926a96',
            }
        })
        return NextResponse.json(response.data);
    }catch(err) {
        return NextResponse.json({error: "Error"}, {status: 404})
    }
}