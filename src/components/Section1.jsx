import Header from "./Header";

function Section1() {
    return (
        <div className="container-fluid pt-3 rounded" style={{ paddingLeft: '7%', paddingRight: '7%' }}>
            <Header />
            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <div className="card border-0 pt-0 mt-0 pt-lg-3 mt-lg-5">
                        <div className="card-body">
                            <h1 className="card-title">Start Chatting with customers, anytime anywhere with Apex</h1>
                            <p className="card-text">Great software that allows you to chat from any place at any time without any interrupt.</p>
                            <button className="btn btn-primary">Start Chatting now</button>
                        </div>
                        <div className="card-footer border-top-0">
                            <div className="row justify-content-around">
                                <div className="col-12 col-sm-6">
                                    <div className="card border-0">
                                        <div className="row">
                                            <div className="col-4 align-self-center">
                                                <img className="img-fluid rounded-start" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body" style={{ paddingLeft: '0px' }}>
                                                    <h5 className="card-title">2,291</h5>
                                                    <p className="card-text">Happy customers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="card border-0">
                                        <div className="row">
                                            <div className="col-4 align-self-center">
                                                <img className="img-fluid rounded-start" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body" style={{ paddingLeft: '0px' }}>
                                                    <h5 className="card-title">2,291</h5>
                                                    <p className="card-text">Happy customers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img className="container-fluid" style={{ height: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaWmxmfM1Vsav7zzjpwRqw39-NbOjp_NYvUrUe7URSLHWwqbKNjy0Ifhz-TOrj3nSMKk&usqp=CAU" alt="images" />
                </div>

            </div>
        </div>
    )
}

export default Section1;