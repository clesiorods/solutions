import { PrismaClient } from '@prisma/client';
import express from 'express'
import { Router, Request, Response } from 'express';

const app = express()
const route = Router()

app.use(express.json())

const prisma = new PrismaClient();

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Wow! My first project in TypeScript!!!' })
})

route.get('/user', async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({where:{id: 1}})
    return res.send(user);
})

route.post('/user', async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data: {
            name: "Clesio",
            email: "clesiobeta@ig.com"
        }
    })
    return res.send(user);
})

app.use(route)

const PORT = 3030

// console.clear();
app.listen(PORT, () => {
    console.clear();
    console.log(`Server running on port ${PORT}`)
});