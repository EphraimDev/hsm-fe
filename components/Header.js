import Link from 'next/link';

const Header = () => (
    
    <nav className="navbar navbar-expand-md">
        <div className="container">
            <Link href="/"><a className="navbar-brand">HMS</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img src="https://res.cloudinary.com/gozzycloud/image/upload/c_scale,w_60/v1574195477/icons8-menu-100_x59yvm.png" className="img-fluid " alt="" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/register"><a className="nav-link">Register</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login"><a className="nav-link">Login</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav >
);

export default Header;