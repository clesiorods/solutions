import prisma from "@/utils/prisma"

function waitFor(ms:number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}

export default async function Subscribers() {
    const subscribers = await prisma.subscriber.findMany();

    await waitFor(2000);
    // throw new Error("");
    

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8" >Lista de Inscritos</h1>
            <table className="w-full text-center">
                <thead className="border-b-[1px]" >
                <tr className="[&>*]:py-4">
                    <th>ID</th>
                    <th>Email</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                    {subscribers.map((sub) => (
                        <tr key={sub.id} className="[&>*]:p-4" >
                            <td>{sub.id}</td>
                            <td className="text-left" >{sub.email}</td>
                            <td>{sub.createdAt.toDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}