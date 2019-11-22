import Header from "./Header";
import '../styles/index.css';
import Head from 'next/head';

const Layout = props => {
    return (
        <div className="body">
            <head>
                <title>Hospital Management System</title>
                <meta 
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
                <link 
                    rel="stylesheet"
                    href="https://bootswatch.com/4/lux/bootstrap.min.css"
                />
                <link 
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <link
					href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
					rel="stylesheet"
				/>
                <link
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0-11/css/all.min.css"
                 />
            </head>
            <Header />
            <div className="mt-5">
                {props.children}
            </div>
        </div>
    )
 
};

export default Layout;
