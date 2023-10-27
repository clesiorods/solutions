
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Chart from "@/components/charts"
import { ServerRequest } from "@/functions/serverRequest"
import { getServerSession } from "next-auth"


function waitFor(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}


export default async function Resume() {
    // await waitFor(3000);

    const session = await getServerSession(nextAuthOptions)
    
    const clientRequest = new ServerRequest();
    console.log(await clientRequest.getData('module'));


    return (
        <main className="p-[18px] w-full ml-0 overflow-y-auto">
            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="h-56" >
                                <h4 className="font-[500] text-3xl flex items-center h-[32px]" >
                                    <div className="subtitle text-lg mt-[7px] mr-1" >R$ </div>
                                    2.300,00
                                    <div className="ml-2 bedge bedge-success" ><span className="rotate-90" >{'>'}</span> 2,2%</div>
                                </h4>
                                <p className="subtitle text-sm" >Divisão de gastos do mês</p>
                                <p>{process.env.NEXT_PUBLIC_API_URL}</p>
                                <div className="h-[calc(100%-55px)]">
                                    <Chart />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Card className="h-56" >
                                Olá, {session?.user.name}
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="h-56" >
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xxl-8">
                    <Card className="h-[468px]" >
                        <p>Neste parágrafo terá algum alista de contas, ou uma lista de saldos baseados na situação financeira dos mês.</p>
                        <br />
                        <p>Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade. Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade.</p>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-xl-6">
                    <Card className="h-[468px]" >
                    </Card>
                </div>
                <div className="col-md-12 col-xl-6">
                    <Card className="h-[468px]" >
                    </Card>
                </div>
            </div>

            <Footer />
        </main>
    )
}