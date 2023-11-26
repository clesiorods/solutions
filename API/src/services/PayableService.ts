import { PrismaClient } from "@prisma/client";
import { CreateModuleProps, createModuleSchema } from "../schemas/module.schemas";
import { createPayableProps, createPayableSchema } from "../schemas/payable.schemas";



export class PayableService {

    prisma = new PrismaClient()

    async create(props: createPayableProps) {
        const data = createPayableSchema.parse(props);
        const payable = await this.prisma.payables.create({ data });
        return payable;
    }


    async findAll() {
        const payables = await this.prisma.payables.findMany(
            {
                select: { id: true, title: true, date_expiration: true, value: true, is_parcel: true },
                where: { deleted_at: null },
                orderBy: { date_expiration: "asc" }
            });
        return payables;
    }


    async findOne(id:number) {
        const payables = await this.prisma.payables.findUniqueOrThrow({ where: { id: id } });
        return payables;
    }


    // async update(props: CreateModuleProps, id: number) {
    //     console.log();
    //     const data = createModuleSchema.parse(props);
    //     data.created_by
    //     const modules = await this.prisma.module.update(
    //         { data, where: { id } }
    //     );
    //     return modules;
    // }
}