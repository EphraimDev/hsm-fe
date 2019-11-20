import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ( props ) => (
    <div>
        <Head>
            <title>Hospital Management System</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
                crossOrigin="anonymous">
            </link>
        </Head>
        <Navbar />
        <div className="container">
            { props.children }
        </div>
    </div>    
)

export default Layout;