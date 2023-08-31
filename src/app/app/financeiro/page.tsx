import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Chart from "@/components/charts"

function waitFor(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}

export default async function Resume() {

    await waitFor(3000);

    return (
        <main className="p-[18px] w-full ml-0 overflow-y-auto">
            <div className="row">
                <div className="col-md-12 col-xl-6">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="h-56" >
                                <p>Era uma casa muitp engraçada, não tinha teto não tinha nada.</p>
                                <div className="h-[80%]">
                                    <Chart />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Card className="h-56" >
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="h-56" >
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-6">
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