import Layout from "../components/Layout";
import Link from 'next/link';

const Index = () => (
    <Layout>
        
        <div className="d-lg-flex col-12 align-items-center justify-content-around h-100">

            <div className="col-12 col-lg-5 col-xl-5 indexHero">
                <h1>Smarter Healthcare</h1>
                <h3 className="mt-3">Protect your Health</h3>
                <p className="lead my-4 my-md-5 "> We are changing Healthcare administation and the way to access your health records, by providing access and care that you can trust. </p>
                <span>
                    <ul className="list-unstyled mt-5">
                        <li>
                            <span><i class="fas fa-laptop-medical fa-lg mr-3"></i></span> 
                            Automated Health Records
                        </li>
                        <li className="my-3">
                            <span><i class="fas fa-user-md fa-lg mr-4"></i></span> 
                            Patient Management
                        </li>
                        <li>
                            <span><i class="fas fa-ambulance fa-lg  mr-3"></i></span> 
                            Emergency Health Services
                        </li>
                    </ul>
                </span>

                <div className="mt-5 col-8 indexButton">
                    <Link href="/register"><a>GET STARTED</a></Link>
                </div>

                <div className="d-none d-sm-none d-md-block d-lg-none indexImage1">
                    <img 
                    src="https://res.cloudinary.com/dulniapvg/image/upload/v1574427694/icons%20-hng/imageedit_5_5500692402_bo6jtt.png" 
                    
                    alt="healthcare image"
                    
                    className="mt-5 img-fluid" />
                </div>
                

            </div>
            
            <div className="col-12 col-lg-7 col-xl-7 d-none d-lg-block d-xl-block">
               <img src="https://res.cloudinary.com/dulniapvg/image/upload/v1574427694/icons%20-hng/imageedit_5_5500692402_bo6jtt.png" alt="healthcare image" className="mt-5 indexImage2" />
            </div>

        </div>
        
    </Layout>
)



export default Index;