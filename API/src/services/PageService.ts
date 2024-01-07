import { Payables, PrismaClient } from "@prisma/client";
import { CreateModuleProps, createModuleSchema } from "../Schemas/module.schemas";
import { createPayableProps, createPayableSchema } from "../Schemas/payable.schemas";
import dayjs from "dayjs";



export class PagesService {

    prisma = new PrismaClient()

    async ResumePage() {
        const firstDate = dayjs().startOf('month').valueOf()-(3600000*3);
        const lastDate = dayjs().endOf('month').valueOf()-(3600000*3);
        let costSum = 0;
        let receivedSum = 0;

        const monthPayable: Payables[] = await this.prisma.$queryRaw`
        SELECT 
            *
        FROM payables
        WHERE date_expiration BETWEEN ${firstDate} AND ${lastDate}
        `;

        monthPayable.forEach((p) => {
            if(p.type == 2) {
                costSum += Number(p.amount_paid);
            }
            if(p.type == 1) {
                receivedSum += Number(p.amount_paid);
            }
        })

        return { costSum, receivedSum, monthPayable };
    }
}