
import { PrismaClient } from "@prisma/client";
import axios from "axios";


interface Istock {
    shortName: string,
    currency: string,
    longName: string,
    logourl: string
}


export class StocksService {
    prisma = new PrismaClient();


    async findOne(symbol: string) {
        let stockExists = await this.prisma.stock.findFirst({where: {symbol:symbol}});
        if(stockExists) {
            return stockExists;
        } else {
            let newStock = await this.add(symbol);
            return newStock;
        }
    }

    
    async add(symbol: string) {
        let stockExists = await this.prisma.stock.findFirst({where: {symbol:symbol}});
        if(stockExists) {
            return stockExists;
        }
        
        const APIKEY = `${process.env.BRAPI_APIKEY}`;
        try {
            const response = await axios.get(`https://brapi.dev/api/quote/${symbol}`, {
                params: {
                    // range: '5d',
                    // interval: '1d',
                    fundamental: true,
                    token: APIKEY
                },
            });

            const data = response.data;
            console.log(data);
            if (('results' in data) && (data['results'])) {
                let newStock = await this.prisma.stock.create({
                    data: {
                        currency: data['results'][0].currency,
                        Description: data['results'][0].longName,
                        longName: data['results'][0].longName,
                        shortName: data['results'][0].shortName,
                        url_logo: data['results'][0].logourl,
                        symbol: symbol
                    }
                });
                return newStock;

            } else {
                return 'Nehuma ação localiada';
            }

        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível comunicar-se com o host dos dados");
        }
    }




    async addAlphaVantage(symbol: string) {
        const APIKEY = `${process.env.QH5SZB3V9QZTOTJN}`;

        const baseUrl = 'https://www.alphavantage.co/query';
        const functionName = 'OVERVIEW';

        try {
            const response = await axios.get(baseUrl, {
                params: {
                    function: functionName,
                    symbol: `${symbol}.SA`,
                    apikey: APIKEY,
                    interval: '5min'
                },
            });

            const data = response.data;
            console.log(data);

            if ('Global Quote' in data) {
                const quoteData = data['Global Quote'];
                return quoteData;
            } else {
                throw new Error("Dados indiponíveis");
            }

        } catch (error) {
            throw new Error("Não foi possível comunicar-se com o host dos dados");
        }
    }

}