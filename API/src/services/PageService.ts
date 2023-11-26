import { Payables, PrismaClient } from "@prisma/client";
import { CreateModuleProps, createModuleSchema } from "../schemas/module.schemas";
import { createPayableProps, createPayableSchema } from "../schemas/payable.schemas";
import dayjs from "dayjs";



export class PagesService {

    prisma = new PrismaClient()

    async ResumePage() {
        const firstDate = dayjs().startOf('month').valueOf()-(3600000*3);
        const lastDate = dayjs().endOf('month').valueOf()-(3600000*3);
        let sumPaid = 0;
        let sumReceived = 0;

        const monthPayable: Payables[] = await this.prisma.$queryRaw`
        SELECT 
            *
        FROM payables
        WHERE date_expiration BETWEEN ${firstDate} AND ${lastDate}
        `;

        monthPayable.forEach((p) => {
            if(p.type == 2) {
                sumPaid += Number(p.amount_paid);
            }
            if(p.type == 1) {
                sumReceived += Number(p.amount_paid);
            }
        })

        return { sumPaid, sumReceived, monthPayable };
    }
}