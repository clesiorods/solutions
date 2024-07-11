import Card from "@/components/Card";
import "./loading.css";


export default function Loading() {
    return (

        <>
            {/* <div className="card loading">
                <div className="image">

                </div>
                <div className="content">
                    <h4></h4>
                    <div className="description">

                    </div>
                </div>
            </div> */}



            <main className="p-[18px] w-full ml-0 overflow-y-auto">
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <div className="row">
                            <div className="col-md-12">
                                <Card className="h-56 loading" >
                                    <p></p>
                                    <p className="w-1/3"></p>
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
                        <Card className="h-[468px] loading" >
                            <p></p>
                            <p></p>
                            <p className="w-10/12" ></p>
                            <br />
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="w-4/12" ></p>
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
            </main>
        </>
    );
}