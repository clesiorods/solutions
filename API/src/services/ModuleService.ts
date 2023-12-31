import { PrismaClient } from "@prisma/client";
import { CreateModuleProps, createModuleSchema } from "../Schemas/module.schemas";



export class ModuleService {

    prisma = new PrismaClient()

    
    async create(props: CreateModuleProps) {
        const data = createModuleSchema.parse(props);
        data.created_by
        const modules = await this.prisma.module.create({ data });
        return modules;
    }


    async update(props: CreateModuleProps, id: number) {
        const data = createModuleSchema.parse(props);
        data.created_by
        const modules = await this.prisma.module.update(
            { data, where: { id } }
        );
        return modules;
    }


    async findAll() {
        const modules = await this.prisma.module.findMany({ where: { deleted_at: null }, orderBy: {order:"asc"} });
        return modules;
    }
}