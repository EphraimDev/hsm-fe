import Head from "next/head";

const Layout = ( props ) => (
    <div>
        <Head>
            <title>Hospital Management System</title>
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
        <div className="container-fluid">
            { props.children }
        </div>
        <style jsx>
            {`
                :global(body) {
                    font-family: 'Nunito', sans-serif;
                }
            `}
        </style>
    </div>    
)

export default Layout;