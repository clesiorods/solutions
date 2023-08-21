
function waitFor(ms:number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}

export default async function Subscribers() {

    await waitFor(4000);    

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
                    <tr>
                        <td>Conteudo</td>
                        <td>Conteudo</td>
                        <td>Conteudo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}