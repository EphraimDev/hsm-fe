import Link from "next/link";
import Head from "next/head";

const DocProfile = () => (
    <div>
        <Head>
            <title>Doctor's Dashboard</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
                crossOrigin="anonymous">
            </link>
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            </link>
            <link 
                href="https://fonts.googleapis.com/css?family=Nunito&display=swap" 
                rel="stylesheet">
            </link>
        </Head>
        <div className="layout">
            <aside className="sticky-top">
                <div className="d-flex justify-content-center mt-5">
                    <img className="img-fluid rounded-circle" src="https://res.cloudinary.com/gozzycloud/image/upload/v1573747383/IMG_20190506_121846_2_ln9amv.jpg" />
                </div>
                <div className="row justify-content-center mt-5">
                    <Link href=""><a><i className="fas fa-envelope"></i></a></Link>
                    <Link href=""><a><i className="fas fa-user-md"></i></a></Link>
                    <Link href=""><a><i className="fas fa-wrench"></i></a></Link>
                </div>

                <div className="mt-5 ml-4">
                    <Link href="">
                        <a>
                            <li className="row">
                                <i className="fas fa-home"></i><p className="text-white">Dashboard</p>
                            </li>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <li className="row mt-1">
                                <i className="fas fa-calendar-check"></i><p className="text-white">Appointments</p>
                            </li>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <li className="row mt-1">
                                <i className="fas fa-user"></i><p className="text-white">Patients</p>
                            </li>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <li className="row mt-1">
                                <i className="fas fa-file"></i><p className="text-white">Reports</p>
                            </li>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <li className="row mt-1">
                                <i className="fas fa-sign-out-alt"></i><p className="text-white">Logout</p>
                            </li>
                        </a>
                    </Link>
                </div>
            </aside>


            <main className="col">
                <div className="mt-4 d-flex">
                    <h4 className="ml-3">Welcome Dr Joe</h4>
                    <div className="ml-auto">
                        <Link href=""><a><i className="fas fa-bell head"><span className="notify">3</span></i></a></Link>
                    </div>
                </div>

                <div className="flex mt-4">
                    <div className="stat pt-2 ">
                        <p className="head">New Patients</p>
                        <div className="row pl-3">
                            <h5>27</h5>
                            <i className="fas fa-user head ml-auto"></i>
                        </div>
                    </div>
                    

                    <div className=" stat pt-2">
                        <p className="head">Operated Patients</p>
                        <div className="row pl-3">
                            <h5>27</h5>
                            <i className="fas fa-user text-success ml-auto"></i>
                        </div>
                    </div>

                    <div className="stat pt-2">
                        <p className="head">Surgeries</p>
                        <div className="row pl-3">
                            <h5>7</h5>
                            <i className="fas fa-bug text-danger ml-auto"></i>
                        </div>
                    </div>
                </div>


                <div className="list-patients">
                    <div>
                        <h5>Appointments List</h5>
                    </div>
                    <table className="table table-hover mt-4">
                        <thead>
                            <tr>
                                <th scope="col" className="head">#</th>
                                <th scope="col" className="head">First Name</th>
                                <th scope="col" className="head">Last Name</th>
                                <th scope="col" className="head">Age</th>
                                <th scope="col" className="head">Ailgment</th>
                                <th scope="col" className="head">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>34</td>
                                <td>Malaria</td>
                                <td>
                                    <button type="button" className="btn btn-success btn-sm mr-4">Accept</button>
                                    <button type="button" className="btn btn-danger btn-sm">Decline</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="list-patients">
                    <div>
                        <h5>Patient's List</h5>
                    </div>
                    <table className="table table-hover mt-4">
                        <thead>
                            <tr>
                                <th scope="col" className="head">#</th>
                                <th scope="col" className="head">First Name</th>
                                <th scope="col" className="head">Last Name</th>
                                <th scope="col" className="head">Age</th>
                                <th scope="col" className="head">Ailgment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>34</td>
                                <td>Malaria</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="pat-report mb-4">
                    <div>
                        <h5>Patient's Recovery Progress</h5>
                    </div>

                    <div className="row cardi pl-3 pr-3 mt-4">
                        <p className="">Johnny Depp Doe</p>
                        <div className="progress col-5 ml-auto">
                            <div className="progress-bar bg-danger text-dark" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <style jsx>
        {`
            :global(body){
                font-family: Nunito, san-serif;
            }

            .layout {
                display: flex;
            }

            aside{
                height: 100vh;
                background: #0C479D;
                overflow-x: hidden;
            }

            .rounded-circle{
                width: 150px;
                height: 150px;
                object-fit: cover;
                margin: 0 40px;
            }

            a {
                text-decoration: none;
            }

            .fas {
                font-size: 1.3em;
                margin: 0 20px;
                color: #fff;
            }

            main {
                background: #f3f3f3;
            }

            .flex {
                display: flex;
                flex-wrap: wrap:
                grid-template-columns: 3 auto auto auto;
            }

            .stat {
                margin: 0 1em;
                width: 100%;
                min-height: 5em;
                background: #fff;
                border-radius: 3px;
                border-left: 5px solid #0C479D;
                padding: 0 15px;
            }

            .notify {
                font-size: 0.8em;
            }

            .head {
                color: #0C479D;
            }

            .list-patients {
                background: #fff;
                margin: 2em 1em;
                padding: 2em 2em;
                border-radius: 3px;
                border-left: 5px solid #0C479D;
            }

            .pat-report {
                background: #fff;
                margin: 2em 1em;
                border-radius: 3px;
                padding: 2em 2em;
                background: #fff;
                border-left: 5px solid #0C479D;
            }
        `}
    </style>
</div>
)

export default DocProfile;