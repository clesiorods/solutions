
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { string } from "zod";


interface Istock {
    shortName: string,
    currency: string,
    longName: string,
    logourl: string
}


export class StocksService {
    prisma = new PrismaClient();



    async findOne(symbol: string) {
        let stockExists = await this.prisma.stock.findFirst({ where: { symbol: symbol } });
        if (stockExists) {
            return stockExists;
        } else {
            let newStock = await this.add(symbol);
            return newStock;
        }
    }



    async add(symbol: string) {
        let stockExists = await this.prisma.stock.findFirst({ where: { symbol: symbol.toUpperCase() } });
        if (stockExists) {
            return stockExists;
        }

        const APIKEY = `${process.env.BRAPI_APIKEY}`;
        try {
            const response = await axios.get(`https://brapi.dev/api/quote/${symbol}`, {
                params: {
                    fundamental: true,
                    token: APIKEY
                },
            });

            const data = response.data;
            if (('results' in data) && (data['results'])) {

                let shortName = data['results'][0].shortName.trim();
                let type = '';
                if (shortName.substring(0, 3) == 'FII') { type = 'FII' }
                if (shortName.substring(shortName.length - 3) == 'DRN') { type = 'DRN' }
                if (shortName.substring(shortName.length - 2) == 'NM') { type = 'NM' }
                if (shortName.substring(shortName.length - 2) == 'N1') { type = 'N1' }
                if (shortName.substring(shortName.length - 2) == 'N2') { type = 'N2' }

                let newStock = await this.prisma.stock.create({
                    data: {
                        currency: data['results'][0].currency,
                        Description: data['results'][0].longName,
                        longName: data['results'][0].longName,
                        type: type,
                        shortName: data['results'][0].shortName,
                        url_logo: data['results'][0].logourl,
                        symbol: symbol.toUpperCase()
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



    async update(symbol: string) {
        let stockExists = await this.prisma.stock.findFirst({ where: { symbol: symbol.toUpperCase() } });
        if (!stockExists) {
            await this.add(symbol);
        }

        try {
            const response = await axios.get(`https://brapi.dev/api/quote/${symbol}`, {
                params: {
                    fundamental: true,
                    token: `${process.env.BRAPI_APIKEY}`
                },
            });

            const data = response.data;
            if (('results' in data) && (data['results'])) {

                let shortName = data['results'][0].shortName.trim();
                let type = '';
                if (shortName.substring(0, 3) == 'FII') { type = 'FII' }
                if (shortName.substring(shortName.length - 3) == 'DRN') { type = 'DRN' }
                if (shortName.substring(shortName.length - 2) == 'NM') { type = 'NM' }
                if (shortName.substring(shortName.length - 2) == 'N1') { type = 'N1' }
                if (shortName.substring(shortName.length - 2) == 'N2') { type = 'N2' }

                let newStock = await this.prisma.stock.updateMany(
                    {
                        where: { symbol: symbol.toUpperCase() },
                        data: {
                            currency: data['results'][0].currency,
                            Description: data['results'][0].longName,
                            longName: data['results'][0].longName,
                            type: type,
                            shortName: data['results'][0].shortName,
                            url_logo: data['results'][0].logourl,
                            symbol: symbol.toUpperCase()
                        }
                    });
                let resp = await this.prisma.stock.findFirst({ where: { symbol: symbol.toUpperCase() } });
                return resp;

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