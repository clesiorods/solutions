import Card from "@/components/Card"
import Footer from "@/components/Footer"

function waitFor(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}

export default async function Resume() {

    // await waitFor(2000);    

    return (
        <main className="p-[6px] pr-[17px] mt-[11px] ml-0 w-full overflow-y-auto">
            <div className="row">
                <div className="col-md-12 col-xl-6">
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
                <div className="col-md-12 col-xl-6">
                    <Card className="h-[468px]" >
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

            <Footer/>
        </main>
    )
}