import Card from "@/components/Card"

function waitFor(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}

export default async function Resume() {

    // await waitFor(2000);    

    return (
        <main className="p-[30px]">
            <div className="row">
                <div className="col-md-6">
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

                <div className="col-md-6">
                    <Card className="h-[478px]" >
                    </Card>
                </div>
            </div>
        </main>
    )
}